// src/hooks/useLineAnimation.js
import { useEffect, useState } from 'react';
import socket from '../socket';

export function useLineAnimation() {
  const [isPaused, setIsPaused] = useState(true); // default paused

  useEffect(() => {
    // 🔌 Socket Events
    socket.on('connect', () => {});
    socket.on('disconnect', () => {});

    socket.on('play-animation', () => setIsPaused(false));
    socket.on('stop-animation', () => setIsPaused(true));

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('play-animation');
      socket.off('stop-animation');
    };
  }, []);

  // 🔘 Emitters + local control
  const handleStart = () => {
    socket.emit('start-animation');
    setIsPaused(false);
  };

  const handleStop = () => {
    socket.emit('stop-animation');
    setIsPaused(true);
  };

  return { isPaused, handleStart, handleStop };
}
