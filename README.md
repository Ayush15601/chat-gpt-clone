# ChatGPT Clone (React + Gemini API)

A modern, highly optimized ChatGPT-inspired web application built with React, pure CSS variables, and Google's Gemini API (`gemini-2.5-flash`). It features real-time conversational markdown rendering, a local persistence layer, custom theme states, and an independent scroll layout.

---

## 📸 Screenshots

![Home page](<home page.png>)


---

## ✨ Features

* **Gemini AI Integration:** Asynchronous interaction with Google GenAI using the advanced `gemini-2.5-flash` model.
* **Markdown Rendering:** Supports clean, well-formatted dynamic markdown strings directly inside chat replies using `react-markdown`.
* **Smart Local Persistence:** Automatically hooks into browser `localStorage` to perfectly save and synchronize recent chats, dialogue feeds, and current user themes across refreshes.
* **Interactive Chat Elements:** Individual message containers include an integrated toggleable **Like/Favorite (♥)** status interaction.
* **Advanced Theme Orchestration:** Full Light Mode and Dark Mode switching utilizing custom `:root` CSS variables mapped to `document.documentElement.className` for flawless edge-to-edge colors and scroll sync (`color-scheme`).
* **Independent Scroll Architecture:** Separate flexbox layout viewports configured with `overscroll-behavior: contain` to lock and isolate history scroll movement away from the primary canvas feed.
* **Unified UI/UX Custom Scrollbars:** Unified custom scrollbar metrics synced to localized CSS theme variables (`--border` / `--bg2`) supporting both Webkit and Mozilla Gecko rendering engines.

---

## 🛠️ Tech Stack

### Frontend Architecture
* **React 18+** (Functional Hooks, Context API state providers, Refs)
* **React Markdown** (Syntax and format parser)
* **Pure CSS3 System** (Dynamic global variable parameters)

### AI Integration
* **Google Gemini API Engine** (`@google/genai`)
* **Vite** (Environment build system)

---

## 🚀 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/chatgpt-clone.git
cd chatgpt-clone
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Configuration
Create a `.env` file directly within the root directory of the application:
```env
VITE_GCP_API_KEY=YOUR_GEMINI_API_KEY
```

### 4. Fire up the Development Engine
```bash
npm run dev
```
The application will boot live on: `http://localhost:5173`

---

## 📁 Updated Project Structure

```text
src/
├── api.js                # Initiates GoogleGenAI Client using gemini-2.5-flash
├── App.jsx               # Top-level Application Context wrapper
├── main.jsx              # DOM Entry Point Mount
├── assets/               # Asset catalog (Vectors, PNG icons, and brand graphics)
├── components/           # Modular Functional Layout Components
│   ├── response.jsx      # Response container block with Markdown and Like tracking
│   ├── sidebar.jsx       # Side Navigation, quick actions, and state togglers
│   └── theme.jsx         # Absolute Popover Theme Toggle Panel
├── context/
│   └── context.jsx       # Shared State Distribution Layer (React Context Provider)
├── css/                  # Granular Structural Pure CSS System
│   ├── home.css          # Chat interface, relative text areas, and main viewport styles
│   ├── index.css         # Global Stylesheet resets, custom scrollbars, and body defaults
│   ├── response.css      # Core chat message text alignments and like button rules
│   ├── sidebar.css       # Flexbox layouts and hover attributes mapping the sidebar
│   └── theme.css         # Theme specific parameters mapping color states
├── hooks/
│   └── hook.js           # Central engine hook (Handles LocalStorage, input triggers, and API loading)
└── page/
    └── home.jsx          # Primary Application Core Viewport mapping side-by-side elements
```

---

## 📋 State Architecture & Data Flow

1. **User Action:** A user types a prompt or selects a recent history button.
2. **Context Orchestration:** The execution flows through `usehook()`, handling global state variables for `loading`, `Messages`, and `localtheme`.
3. **Persistent Layering:** A dual-stream `useEffect` ecosystem interceptor watches hooks to dynamically write and read conversational blocks or class configurations into client storage.
4. **HTML Level Interfacing:** Selected variables map immediately down to `document.documentElement.className` to execute a site-wide repaint instantly.

---

## 👤 Author

* **Ayush**

---

## 📄 License

This project is fully open source and distributed under the terms of the [MIT License](LICENSE).
