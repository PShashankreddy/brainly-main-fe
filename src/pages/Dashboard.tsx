import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from "../components/Card";
import { CreateContentModal } from "../components/CreateContentModal";
import { Sidebar } from "../components/Sidebar";
import { Toast } from "../components/Toast";
import { EmptyState } from "../components/EmptyState";
import { useState, useEffect } from "react";
import { useContent } from "../hooks/useContent";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [refresh, setRefresh] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);
  const navigate = useNavigate();

  const contents = useContent(refresh);
  const username = localStorage.getItem("username") || "User";

  // Keyboard shortcut: Ctrl/Cmd + K → open modal
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setModalOpen(true);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Filter by type, then by search query
  const filteredContents = filterType
    ? contents.filter((c: any) => c.type === filterType)
    : contents;

  const displayedContents = searchQuery.trim()
    ? filteredContents.filter((c: any) =>
        c.title?.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : filteredContents;

  const handleShareBrain = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/brain/share`,
        { share: true },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      if (response.data.link) {
        const fullLink = `${BACKEND_URL}${response.data.link}`;
        navigator.clipboard.writeText(fullLink);
        setToast({
          message: "Brain link copied to clipboard!",
          type: "success",
        });
      }
    } catch (error) {
      console.error("Error sharing brain:", error);
      setToast({ message: "Failed to share brain", type: "error" });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div>
      <Sidebar onFilterChange={setFilterType} />

      {/* Toast notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="p-4 ml-72 min-h-screen bg-gray-200 border border-gray-300">
        <CreateContentModal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setRefresh((r) => r + 1);
          }}
        />

        {/* Top bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "16px",
            marginBottom: "8px",
            borderBottom: "1px solid #d1d5db",
          }}
        >
          <h1 className="text-3xl font-bold text-gray-800">
            {filterType
              ? `${filterType.charAt(0).toUpperCase() + filterType.slice(1)}`
              : "All Notes"}
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Search bar */}
            <div
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: "10px",
                  color: "#9ca3af",
                  fontSize: "14px",
                  pointerEvents: "none",
                }}
              >
                🔍
              </span>
              <input
                type="text"
                placeholder="Search notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  height: "36px",
                  paddingLeft: "32px",
                  paddingRight: "12px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  background: "#ffffff",
                  fontSize: "13px",
                  color: "#374151",
                  outline: "none",
                  width: "180px",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#7c3aed")}
                onBlur={(e) => (e.target.style.borderColor = "#e5e7eb")}
              />
            </div>

            {/* User pill */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                height: "36px",
                padding: "0 14px",
                borderRadius: "8px",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                fontSize: "13px",
                fontWeight: 500,
                color: "#374151",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  borderRadius: "6px",
                  background: "#7c3aed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "11px",
                  fontWeight: 700,
                }}
              >
                {username.charAt(0).toUpperCase()}
              </div>
              Hi,{" "}
              <span style={{ color: "#7c3aed", fontWeight: 600 }}>
                {username}
              </span>
            </div>

            {/* Add Content */}
            <button
              onClick={() => setModalOpen(true)}
              title="Add Content (Ctrl+K)"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                height: "36px",
                padding: "0 14px",
                borderRadius: "8px",
                background: "#7c3aed",
                border: "none",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#6d28d9")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#7c3aed")
              }
            >
              <PlusIcon /> Add Content
            </button>

            {/* Share Brain */}
            <button
              onClick={handleShareBrain}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                height: "36px",
                padding: "0 14px",
                borderRadius: "8px",
                background: "#ede9fe",
                border: "1px solid #ddd6fe",
                color: "#7c3aed",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#ddd6fe")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#ede9fe")
              }
            >
              <ShareIcon /> Share Brain
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              style={{
                display: "flex",
                alignItems: "center",
                height: "36px",
                padding: "0 14px",
                borderRadius: "8px",
                background: "#f3f4f6",
                border: "1px solid #e5e7eb",
                color: "#374151",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#e5e7eb")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#f3f4f6")
              }
            >
              Logout
            </button>
          </div>
        </div>

        {/* Card grid */}
        <div className="pt-2 flex gap-4 flex-wrap">
          {displayedContents.map(
            ({ id, type, link, title }: any, idx: number) => (
              <Card
                key={`${type}-${link || idx}`}
                id={id}
                type={type}
                link={link}
                title={title}
                onDelete={() => setRefresh(refresh + 1)}
              />
            ),
          )}
        </div>

        {/* Empty state */}
        {displayedContents.length === 0 && (
          <EmptyState searchQuery={searchQuery} filterType={filterType} />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
