import socket from 'socket.io-client';

const socket = socketio('http://', {
  autoConnect: false,
});

function connetc(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  }

  socket.connetc();
}

function disconect() {
  if (socket.connected) {
    socket.disconect();
  }
}

export {
  connetc,
  disconect,
}