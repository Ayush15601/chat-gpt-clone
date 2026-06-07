# ChatGPT Clone (React + Gemini API)

A modern ChatGPT-inspired web application built with React and Google's Gemini API. Users can send prompts, receive AI-generated responses, manage chat history, and interact with a clean chat interface.


## Features

* AI-powered responses using Gemini 2.5 Flash Lite
* Real-time chat interface
* Multiple conversation messages
* Loading state while generating responses
* Error handling for failed API requests
* New Chat functionality
* Quick prompt buttons
* Like/Favorite responses
* Fixed chat input area
* Markdown response rendering
* Responsive sidebar layout


## Tech Stack

### Frontend

* React
* JavaScript (ES6+)
* CSS3
* React Markdown

### AI Integration

* Google Gemini API
* @google/genai


## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/chatgpt-clone.git
```

### 2. Navigate to the project folder

```bash
cd chatgpt-clone
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create environment variables

Create a `.env` file in the root directory:

```env
VITE_GCP_API_KEY=YOUR_GEMINI_API_KEY
```

### 5. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```


## Project Structure

```text
src/
│
├── assets/
│   ├── components/
│   │   ├── api.js
│   │   └── response.jsx
│   │
│   ├── css/
│   │   ├── App.css
│   │   └── response.css
│   │
│   ├── *.svg
│   └── *.png
│
├── App.jsx
└── main.jsx
```


## How It Works

1. User enters a prompt.
2. React sends the prompt to the Gemini API.
3. Gemini generates a response.
4. The response is displayed in the chat window.
5. Messages are stored in component state and rendered dynamically.


## Current Features

* Chat conversations
* Prompt suggestions
* Message history
* Loading indicator
* Error handling
* Like button for responses

## Planned Improvements

* Auto-scroll to latest message
* Message persistence using local storage
* Dark/Light theme toggle
* Chat history management
* Copy response button
* Regenerate response button
* Backend proxy for API security
* Authentication system
* User profiles
* Responsive mobile design


## Security Note

This project currently uses a Vite environment variable for the Gemini API key.

For production deployments, API requests should be routed through a backend server to avoid exposing API credentials to users.


## Dependencies

```json
{
  "@google/genai": "^latest",
  "react": "^latest",
  "react-dom": "^latest",
  "react-markdown": "^latest"
}
```


## Learning Goals

This project was built to practice:

* React Hooks
* State Management
* API Integration
* Component-Based Architecture
* Conditional Rendering
* Async/Await
* Frontend UI Development


## License

This project is open source and available under the MIT License.
