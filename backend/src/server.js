import express from 'express';
import http from 'http';
import cors from 'cors';
import { initSocket } from './config/socket.js';
import { createAdapter } from '@socket.io/redis-adapter';
import Redis from 'ioredis'; 

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// Create Redis clients (auto-connects)
const pubClient = new Redis(); // redis://localhost:6379 by default
const subClient = pubClient.duplicate(); // Also auto-connects

//Setup Socket.IO + Redis Adapter
const io = initSocket(server); // Must return `io` from your config

io.adapter(createAdapter(pubClient, subClient));

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
