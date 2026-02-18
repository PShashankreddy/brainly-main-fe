import { NoteBookIcon } from "../icons/NoteBookIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface CardProps {
  id: string;
  title: string;
  link: string;
  type: "tweet" | "twitter" | "youtube";
  onDelete?: () => void;
}

export function Card({ id, title, link, type, onDelete }: CardProps) {
  const tweetContainerRef = useRef<HTMLDivElement | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  useEffect(() => {
    if (!(type === "twitter" || type === "tweet")) return;
    if (!link) return;

    const tweetId = parseTweetId(link);
    if (!tweetId) return;

    const tryCreate = () => {
      const container = tweetContainerRef.current;
      if (!container) return false;

      // If we've already created this tweet in this container, skip.
      if (container.getAttribute("data-tweet-id") === tweetId) return true;

      if ((window as any).twttr && (window as any).twttr.widgets) {
        try {
          // clear any previous content and mark the id to avoid duplicate injection
          container.innerHTML = "";
          container.setAttribute("data-tweet-id", tweetId);

          (window as any).twttr.widgets
            .createTweet(tweetId, container, {
              conversation: "none",
              cards: true,
              align: "left",
            })
            .then((el: any) => {
              try {
                if (el && el.style) {
                  el.style.width = "100%";
                  el.style.maxWidth = "100%";
                } else if (container) {
                  const iframe = container.querySelector("iframe");
                  if (iframe && (iframe as HTMLElement).style) {
                    (iframe as HTMLElement).style.width = "100%";
                    (iframe as HTMLElement).style.maxWidth = "100%";
                  }
                }
              } catch (e) {}
            })
            .catch(() => {
              // if createTweet failed, remove the marker so we can retry later
              try {
                container.removeAttribute("data-tweet-id");
              } catch (e) {}
            });
        } catch (e) {
          // ignore
        }
        return true;
      }
      return false;
    };

    if (tryCreate()) return;

    let attempts = 0;
    const maxAttempts = 10;
    const interval = window.setInterval(() => {
      attempts++;
      if (tryCreate() || attempts >= maxAttempts) {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [type, link]);

  return (
    <div>
      <div className="p-4 bg-white rounded-md shadow-md border-gray-300 max-w-72 border min-h-48 min-w-72">
        <div className="flex justify-between">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <NoteBookIcon />
            </div>
            {title}
          </div>

          <div className="flex items-center gap-1">
            {/* Copy link button */}
            <div style={{ position: "relative" }}>
              <button
                onClick={handleCopy}
                title="Copy link"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "2px 6px",
                  color: "#9ca3af",
                  fontSize: "13px",
                  borderRadius: "4px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#7c3aed")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
              >
                {copied ? "✓" : "⎘"}
              </button>
              {copied && (
                <span
                  style={{
                    position: "absolute",
                    bottom: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#7c3aed",
                    color: "#fff",
                    fontSize: "11px",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    whiteSpace: "nowrap",
                    pointerEvents: "none",
                  }}
                >
                  Copied!
                </span>
              )}
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="pr-2 text-gray-500"
            >
              <ShareIcon />
            </a>

            <div
              className="text-gray-500 cursor-pointer"
              onClick={async () => {
                if (confirm("Delete this content?")) {
                  try {
                    const response = await axios.delete(
                      `${BACKEND_URL}/api/v1/content`,
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                        data: {
                          contentId: id,
                        },
                      },
                    );
                    console.log("Delete successful:", response);
                    onDelete?.();
                  } catch (error: any) {
                    console.error(
                      "Delete error:",
                      error.response?.data || error.message,
                    );
                    alert(
                      `Failed to delete: ${error.response?.data?.message || error.message}`,
                    );
                  }
                }
              }}
            >
              <DeleteIcon />
            </div>
          </div>
        </div>

        <div className="pt-4">
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={`https://www.youtube.com/embed/${
                link.includes("youtu.be")
                  ? link.split("youtu.be/")[1].split("?")[0]
                  : link.split("v=")[1].split("&")[0]
              }`}
              title="YouTube video player"
              allowFullScreen
            />
          )}

          {(type === "twitter" || type === "tweet") && (
            <div ref={tweetContainerRef} className="w-full overflow-hidden" />
          )}
        </div>
      </div>
    </div>
  );
}

function parseTweetId(url: string): string | null {
  try {
    // extract a long digit sequence (tweet id) from the URL or string
    const m = url.match(/(\d{5,})/);
    if (m && m[1]) return m[1];
    // or if only id provided
    const idOnly = url.match(/^\d+$/);
    if (idOnly) return url;
    return null;
  } catch (e) {
    return null;
  }
}

// inject tweet when twttr is available (outside component) — use effect inside component above will trigger
