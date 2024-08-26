const { PostRoutesHandler: PostRouteHandler } = require("./posts.js");
const { UserRouteHandler } = require("./users.js");

exports.module =  { PostRouteHandler, UserRouteHandler };
