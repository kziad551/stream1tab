// /api/websocket/route.js
import { Server } from 'ws';

export async function GET(req, res) {
  // Creating WebSocket server
  const wss = new Server({ noServer: true });

  wss.on('connection', (ws) => {
    console.log('Client connected to WebSocket server.');
    
    // When the server receives a message
    ws.on('message', (message) => {
      console.log('Received message:', message);
    });

    // Send a message to the client when they connect
    ws.send('Hello from WebSocket server!');
  });

  res.status(200).json({ message: 'WebSocket server running' });
}

// Handle WebSocket upgrade
export function upgrade(req, socket, head) {
  const wss = new Server({ noServer: true });
  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit('connection', ws, req);
  });
}
