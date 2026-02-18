interface EmptyStateProps {
  searchQuery: string;
  filterType: string | null;
}

export function EmptyState({ searchQuery, filterType }: EmptyStateProps) {
  const isSearch = searchQuery.trim().length > 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "56px", marginBottom: "16px" }}>
        {isSearch ? "🔍" : filterType ? "📂" : "🧠"}
      </div>
      <h2
        style={{
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "#374151",
          marginBottom: "8px",
        }}
      >
        {isSearch
          ? `No results for "${searchQuery}"`
          : filterType
            ? `No ${filterType} content yet`
            : "Your brain is empty!"}
      </h2>
      <p
        style={{
          fontSize: "14px",
          color: "#9ca3af",
          maxWidth: "280px",
          lineHeight: 1.6,
        }}
      >
        {isSearch
          ? "Try a different search term."
          : 'Click "Add Content" to save your first tweet, video, or link.'}
      </p>
    </div>
  );
}
