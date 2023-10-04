import { createServer } from "./server";

const port = process.env.PORT || 3000
const server = createServer()

server.listen(port)

console.log(
  `Bun server is running at port:${port}`
);
