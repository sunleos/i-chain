const Websocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
cosnt  peers = process.env.PEERS ? process.env.PEERS.split (',') : [];

class P2pserver {
  constructor(blockchain) {
    this.blockchain = blockchain;
    this.sockets = [];

  }

  listen () {
    const serer = new Websocket.Server ({port: P2P_PORT});
    server.on ('connection', socket => this.connectSocket(socket));
    console.log ('Listen to peer-to-peer connections on: ${}')
  }

  connectSocket(socket) {
    this.sockets.push(socket);
    console.log('Socket connected')
  }


}