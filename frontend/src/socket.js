// src/socket.js

import { io } from 'socket.io-client';

// Connect to backend socket server
const socket = io('http://localhost:5000', {
  transports: ['websocket'], // force WebSocket (more reliable in dev)
  reconnectionAttempts: 5,   // try 5 times if disconnects
  timeout: 2000              // wait max 2s for connection
});

// Optional: log connection status
socket.on('connect', () => {
  console.log('🟢 [Frontend] Connected to backend:', socket.id);
});

socket.on('connect_error', (err) => {
  console.error('🔴 [Frontend] Connection error:', err.message);
});

export default socket;
