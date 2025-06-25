import { Server } from 'socket.io';
import { handleAnimationEvents } from '../controllers/animation.controller.js';

export function initSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: 'http://localhost:5173',
      methods: ['GET', 'POST']
    }
  });

  io.on('connection', (socket) => {
    // Handle animation events
    handleAnimationEvents(socket, io);

    socket.on('disconnect', () => {
      console.log(' Client disconnected:', socket.id);
    });
  });

  return io; 
}
