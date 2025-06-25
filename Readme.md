# 🚀 web3Task

A real-time collaborative animation app using **React**, **Socket.IO**, and **Redis**.  
Start and stop a shared animated line—every user sees the same animation state instantly!

---

## 📸 Demo

<!--
Add your demo video or GIF here later.
Example:
![Demo Animation](demo.gif)
-->

---

## 📝 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [How It Works](#how-it-works)
- [Socket Events](#socket-events)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [FAQ](#faq)
- [License](#license)

---

## 🧩 Project Overview

**web3Task** is a real-time web app where users can control an animated line together.  
When any user starts or stops the animation, all connected users see the change instantly—thanks to Socket.IO and Redis Pub/Sub.

---

## ✨ Features

- 🔴 **Real-time Animation Sync:** All users see the same animation state.
- 🎨 **Animated UI:** Smooth, colorful line animation with interactive text.
- 🧑‍🤝‍🧑 **Multi-user Collaboration:** Any user can control the animation.
- ⚡ **Scalable Backend:** Redis adapter for horizontal scaling.
- 📱 **Responsive Design:** Looks great on all devices.

---

## 🛠️ Tech Stack

| Frontend           | Backend                | Real-time & DB |
|--------------------|------------------------|----------------|
| React              | Node.js (Express)      | Socket.IO      |
| TailwindCSS        | Socket.IO (server)     | Redis          |
| Framer Motion      | @socket.io/redis-adapter| ioredis        |

---

## 🏗️ Architecture

```mermaid
flowchart LR
    User1[User Browser] -- Socket.IO --> Backend
    User2[User Browser] -- Socket.IO --> Backend
    Backend -- Redis Pub/Sub --> Redis
    Backend -- Socket.IO --> All Users
```

- **Frontend:** React app connects to backend via Socket.IO.
- **Backend:** Express server with Socket.IO, using Redis for scaling.
- **Redis:** Enables real-time sync across multiple backend instances.

---

## 🔄 How It Works

1. **User opens the app** → connects to backend via Socket.IO.
2. **User clicks "Start Animation"** → emits event to backend.
3. **Backend receives event** → broadcasts to all clients.
4. **All clients update animation state** in real-time.
5. **Redis adapter** ensures sync even if backend is scaled horizontally.

---

## 📡 Socket Events

| Event Name        | Direction         | Description                        |
|-------------------|------------------|------------------------------------|
| `start-animation` | Client → Server  | User requests to start animation   |
| `stop-animation`  | Client → Server  | User requests to stop animation    |
| `play-animation`  | Server → Client  | Server tells clients to play       |
| `stop-animation`  | Server → Client  | Server tells clients to stop       |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- Redis server running locally (`localhost:6379`)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd web3Task
```

### 2. Start the Backend

```bash
cd backend
npm install
npm start
```

### 3. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:5000](http://localhost:5000)

---

## 📂 Project Structure

```
web3Task/
  backend/
    src/
      config/
        socket.js
      controllers/
        animation.controller.js
      server.js
  frontend/
    src/
      components/
        AnimatedLine.jsx
      customs/
        Text.jsx
      hooks/
        useLineAnimation.js
      App.jsx
```

---

## ❓ FAQ

**Q: What if Redis is not running?**  
A: The backend will not work. Please ensure Redis is running on `localhost:6379`.

**Q: Can I deploy this on multiple servers?**  
A: Yes! Thanks to the Redis adapter, Socket.IO events are synced across instances.

**Q: How do I add a demo video?**  
A: Replace the placeholder in the [Demo](#demo) section with your GIF or video.

---

## 📜 License

MIT License

---

**Made with ❤️ using React, Node.js, Socket.IO, and Redis.**