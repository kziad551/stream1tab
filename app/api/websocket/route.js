// app/api/websocket/route.js

import { Server } from 'ws';

export async function GET(request) {
  // This will be called on request, but we handle the WebSocket connection separately
  return new Response('WebSocket server is running', {
    status: 200,
  });
}

// WebSocket connection handling
export function upgrade(req, socket, head) {
  const wss = new Server({ noServer: true });

  // Handle WebSocket upgrade request
  wss.handleUpgrade(req, socket, head, (ws) => {
    wss.emit('connection', ws, req);
  });
}

// WebSocket connection management
const wss = new Server({ noServer: true });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (message) => {
    console.log('Received: %s', message);
  });

  // Send a message to the client when they connect
  ws.send('Hello from the WebSocket server!');
});

