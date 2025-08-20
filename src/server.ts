import { Server, createServer, IncomingMessage, ServerResponse } from "http";


let server: Server;


server = createServer((req: IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, world!\n");
});

// Start listening on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
