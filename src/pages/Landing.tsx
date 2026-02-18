import { useNavigate } from "react-router-dom";

export function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(160deg, #f5f3ff 0%, #ede9fe 40%, #e0f2fe 100%)",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#1f2937",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(245, 243, 255, 0.85)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #ddd6fe",
          padding: "0 2rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "60px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "#ddd6fe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
              }}
            >
              🧠
            </div>
            <span
              style={{
                fontSize: "20px",
                fontWeight: 800,
                color: "#7c3aed",
                letterSpacing: "-0.5px",
              }}
            >
              Brainly
            </span>
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <button
              onClick={() => navigate("/signin")}
              style={{
                padding: "7px 18px",
                background: "#ede9fe",
                border: "1px solid #ddd6fe",
                borderRadius: "8px",
                color: "#6d28d9",
                fontWeight: 600,
                fontSize: "14px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = "#ddd6fe";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = "#ede9fe";
              }}
            >
              Login
            </button>
            <button
              onClick={() => navigate("/signup")}
              style={{
                padding: "7px 18px",
                background: "#7c3aed",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontWeight: 600,
                fontSize: "14px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = "#6d28d9";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = "#7c3aed";
              }}
            >
              Sign Up Free
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ padding: "110px 2rem 60px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "#ddd6fe",
              borderRadius: "100px",
              padding: "5px 14px",
              marginBottom: "24px",
              fontSize: "13px",
              color: "#6d28d9",
              fontWeight: 600,
            }}
          >
            ✨ Your Second Brain, Supercharged
          </div>

          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "18px",
              letterSpacing: "-1px",
              color: "#1e1b4b",
            }}
          >
            Save Everything.{" "}
            <span style={{ color: "#7c3aed" }}>Remember Forever.</span>
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#4b5563",
              lineHeight: 1.75,
              maxWidth: "520px",
              margin: "0 auto 36px",
            }}
          >
            Capture tweets, YouTube videos, articles and links in one place.
            Organize your knowledge and share it with the world.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => navigate("/signup")}
              style={{
                padding: "11px 28px",
                background: "#7c3aed",
                border: "none",
                borderRadius: "10px",
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(124,58,237,0.3)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = "#6d28d9";
                (e.target as HTMLButtonElement).style.transform =
                  "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = "#7c3aed";
                (e.target as HTMLButtonElement).style.transform =
                  "translateY(0)";
              }}
            >
              🚀 Get Started — It's Free
            </button>
            <button
              onClick={() => navigate("/signin")}
              style={{
                padding: "11px 28px",
                background: "#ede9fe",
                border: "1px solid #c4b5fd",
                borderRadius: "10px",
                color: "#6d28d9",
                fontWeight: 600,
                fontSize: "15px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.background = "#ddd6fe";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.background = "#ede9fe";
              }}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ padding: "20px 2rem 80px" }}>
        <div style={{ maxWidth: "1050px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.8rem",
              fontWeight: 800,
              marginBottom: "10px",
              color: "#1e1b4b",
            }}
          >
            Everything you need to{" "}
            <span style={{ color: "#7c3aed" }}>build your brain</span>
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              marginBottom: "44px",
              fontSize: "0.95rem",
            }}
          >
            Powerful features to capture, organize, and share your knowledge
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                icon: "💾",
                title: "Save Anything",
                desc: "One-click saving from Twitter, YouTube, articles, and any link across the web.",
              },
              {
                icon: "🏷️",
                title: "Smart Organization",
                desc: "Tag and categorize your content. Find anything instantly with powerful search.",
              },
              {
                icon: "🚀",
                title: "Share Your Brain",
                desc: "Generate a shareable link to your curated collection. Collaborate or keep it private.",
              },
              {
                icon: "🔒",
                title: "Secure & Private",
                desc: "Your data is encrypted and protected. You control what you share and with whom.",
              },
              {
                icon: "⚡",
                title: "Lightning Fast",
                desc: "Instant access to all your saved content. No lag, no waiting, just your knowledge.",
              },
              {
                icon: "🌐",
                title: "Access Anywhere",
                desc: "Your second brain is always with you — on any device, any browser, anywhere.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                style={{
                  background: "#ede9fe",
                  border: "1px solid #ddd6fe",
                  borderRadius: "14px",
                  padding: "22px",
                  transition: "all 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-3px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 8px 20px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                <div style={{ fontSize: "26px", marginBottom: "12px" }}>
                  {feature.icon}
                </div>
                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    marginBottom: "6px",
                    color: "#7c3aed",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: "#4b5563",
                    fontSize: "13px",
                    lineHeight: 1.6,
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ padding: "0 2rem 80px" }}>
        <div
          style={{
            maxWidth: "620px",
            margin: "0 auto",
            textAlign: "center",
            background: "#ede9fe",
            border: "1px solid #c4b5fd",
            borderRadius: "20px",
            padding: "52px 36px",
          }}
        >
          <div style={{ fontSize: "2.2rem", marginBottom: "12px" }}>🧠</div>
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 800,
              marginBottom: "10px",
              color: "#1e1b4b",
            }}
          >
            Ready to build your second brain?
          </h2>
          <p
            style={{
              color: "#4b5563",
              marginBottom: "28px",
              fontSize: "0.95rem",
            }}
          >
            Join thousands of people who use Brainly to save and organize their
            knowledge.
          </p>
          <button
            onClick={() => navigate("/signup")}
            style={{
              padding: "11px 32px",
              background: "#7c3aed",
              border: "none",
              borderRadius: "10px",
              color: "#fff",
              fontWeight: 700,
              fontSize: "15px",
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(124,58,237,0.3)",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = "#6d28d9";
              (e.target as HTMLButtonElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "#7c3aed";
              (e.target as HTMLButtonElement).style.transform = "translateY(0)";
            }}
          >
            Start for Free →
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #ddd6fe",
          background: "#ede9fe",
          padding: "24px 2rem",
          textAlign: "center",
          color: "#6b7280",
          fontSize: "13px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            marginBottom: "4px",
          }}
        >
          <span>🧠</span>
          <span style={{ fontWeight: 700, color: "#7c3aed" }}>Brainly</span>
        </div>
        <p>© 2026 Brainly. Build your second brain.</p>
      </footer>
    </div>
  );
}
