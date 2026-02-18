# 🧠 Brainly — Your Second Brain

> **Stop forgetting things. Start building your knowledge base.**

Brainly is a personal knowledge hub where you can save, organize, and share content from across the internet — tweets, YouTube videos, articles, links — all in one clean, fast dashboard.

---

## ✨ What it does

- 📌 **Save** tweets, YouTube videos, articles, and links in seconds
- 🏷️ **Organize** your content by type — filter by Twitter, YouTube, Documents, and more
- 🔗 **Share** your entire brain with a single shareable link
- 🔒 **Secure** — JWT-based auth keeps your data yours

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Tech Stack

| Layer     | Technology                   |
| --------- | ---------------------------- |
| Framework | React + TypeScript (Vite)    |
| Styling   | Tailwind CSS                 |
| Routing   | React Router v6              |
| HTTP      | Axios                        |
| Auth      | JWT (stored in localStorage) |

---

## 📁 Project Structure

```
src/
├── pages/
│   ├── Landing.tsx       # Public landing page
│   ├── SignIn.tsx        # Login page
│   ├── SignUp.tsx        # Registration page
│   └── Dashboard.tsx     # Main app (protected)
├── components/
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── Card.tsx          # Content card
│   ├── Button.tsx        # Reusable button
│   └── CreateContentModal.tsx
├── hooks/
│   └── useContent.ts     # Fetches saved content
└── App.tsx               # Routes & auth guard
```

---

## 🔐 Auth Flow

1. Sign up / Sign in → JWT token saved to `localStorage`
2. `/dashboard` is protected — redirects to `/signin` if not logged in
3. Visiting `/` always shows the landing page (no auto-redirect)
4. Logout clears the token and returns to the landing page

---

## 🌐 Backend

This is the **frontend** repo. It connects to a separate REST API backend.  
Set your backend URL in `src/config.ts`:

```ts
export const BACKEND_URL = "http://localhost:3000";
```

---

## 📸 Pages

| Page      | Route        | Access           |
| --------- | ------------ | ---------------- |
| Landing   | `/`          | Public           |
| Sign In   | `/signin`    | Public           |
| Sign Up   | `/signup`    | Public           |
| Dashboard | `/dashboard` | 🔒 Auth required |

---

> Built with ❤️ — because your ideas deserve a better home than browser bookmarks.
