require("dotenv").config();
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT;
const app = express();
const server = http.createServer(app);
const Routes = require("./app/routes");
console.log(process.env.NODE_ENV);

// if (process.env.NODE_ENV === "production") {
// Exprees will serve up production assets
app.use(express.static("client/build"));
// Express serve up index.html file if it doesn't recognize route
const path = require("path");
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
// }
app.use([
  cors(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: false }),
  Routes,
]);

const io = (module.exports.io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
}));
const socketManager = require("./app/socketManager");
io.on("connection", socketManager);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
