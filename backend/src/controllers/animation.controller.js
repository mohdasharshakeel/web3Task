export function handleAnimationEvents(socket, io) {

  socket.on('start-animation', () => {
    io.emit('play-animation'); 
  });

  socket.on('stop-animation', () => {
    io.emit('stop-animation'); 
  });
}
