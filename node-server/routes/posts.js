const { posts } = require("../dummy-data.js");
async function PostRoutesHandler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const segments = url.pathname.split("/");
  if (segments[1] !== "posts" || segments.length > 3) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not found " }));
  }
  const method = req.method;
  switch (method) {
    case "GET":
      if (segments[1] == "posts" && segments.length == 2) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(posts));
      } else if (segments[1] == "posts" && segments.length == 3) {
        const id = url.pathname.split("/")[2];
        res.writeHead(200, { "Content-Type": "application/json" });
        const post = posts.find((val) => val.id == id);
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
        console.log(body);
        posts.push(body);
      });
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("post added");
      break;
    case "PUT":
      break;
    case "DELETE":
      break;
  }
}
exports.module = { PostRoutesHandler };
