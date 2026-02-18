import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const ContentType = {
  Document: "document",
  Tweet: "tweet",
  Youtube: "youtube",
  Link: "link",
} as const;

export type ContentType = (typeof ContentType)[keyof typeof ContentType];

export function CreateContentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const linkRef = useRef<HTMLInputElement | null>(null);
  const [type, setType] = useState<ContentType>(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;
    try {
      await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        {
          link,
          title,
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      onClose(); // Close the modal on success
      // If we had a callback for refresh, we would call it here.
    } catch (e) {
      console.error("Error adding content", e);
      alert("Failed to add content");
    }
  }

  return (
    <div>
      {open && (
        <div>
          <div className="h-screen w-screen bg-slate-500/70 fixed top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center ">
              <span className="bg-white opacity-100 p-4 rounded">
                <div className="flex justify-end">
                  <div onClick={onClose} className="cursor-pointer">
                    <CrossIcon />
                  </div>
                </div>

                <div>
                  <Input ref={titleRef} placeholder="Title" />
                  <Input ref={linkRef} placeholder="Link" />

                  {/* 🔽 MISSING PART ADDED HERE */}
                  <div className="flex gap-2 justify-center py-2">
                    <Button
                      text="Youtube"
                      variant={
                        type === ContentType.Youtube ? "primary" : "secondary"
                      }
                      onClick={() => setType(ContentType.Youtube)}
                    />

                    <Button
                      text="Twitter"
                      variant={
                        type === ContentType.Tweet ? "primary" : "secondary"
                      }
                      onClick={() => setType(ContentType.Tweet)}
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button
                      onClick={addContent}
                      variant="primary"
                      text="Submit"
                    />
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
