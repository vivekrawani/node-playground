const http = require("node:http");
const { PostRouteHandler, UserRouteHandler } = require("./routes/index.js");
const { posts } = require("./dummy-data.js");
const server = http.createServer(async (req, res) => {
  // console.log(res);
  // const url = req.url;
  // console.log(req.method, url);

  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  ); // Allowed methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type"); // Allowed headers

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  const method = req.method;
  if (pathname.startsWith("/posts")) {
    await PostRouteHandler(req, res);
  } else if (pathname.startsWith("/users")) {
    await UserRouteHandler(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not found " }));
  }
});
const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});
