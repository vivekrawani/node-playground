const { posts, users } = require("../dummy-data.js");
async function UserRouteHandler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const segments = url.pathname.split("/");
  if (segments[1] !== "users" || segments.length > 3) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not found " }));
  }
  const method = req.method;
  switch (method) {
    case "GET":
      if (segments[1] == "users" && segments.length == 2) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(posts));
      } else if (segments[1] == "users" && segments.length == 3) {
        const id = segments[2];
        res.writeHead(200, { "Content-Type": "application/json" });
        const post = users.find((val) => val.id == id);
        res.end(JSON.stringify(post));
      }
      break;
    case "POST":
      let rawBody = "";
      req.on("data", (data) => {
        rawBody += data;
      });
      req.on("end", () => {
        const body = JSON.parse(rawBody);
        
        users.push(body);
      });
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("user added");
      break;
    case "PUT":
      break;
    case "DELETE":
      break;
  }
}
exports.module = { UserRouteHandler };
