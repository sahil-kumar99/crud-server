require("dotenv").config();
require("./models");
const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config");
const cors = require("cors");
const http = require("http");
var morgan = require("morgan");
const app = express();
const PostRouter = require("./routes/post");

app.use(cors());
app.options("*", cors());
app.use(morgan("dev"));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Cross-Origin-Resource-Policy", "cross-origin");
  next();
});

app.use("/posts", PostRouter);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
