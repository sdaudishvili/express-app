const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "pug");

/* Config */
const PORT = config.get("api.port");
const HOST = config.get("api.host");
const connectionString = config.get("api.connectionString");

// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

/* API Routes */
const apiProjectsRoute = require("./routes/api/projectsRoute");
const apiContactsRoute = require("./routes/api/contactsRoute");
const apiAboutRoute = require("./routes/api/aboutRoute");
app.use("/api/projects", apiProjectsRoute);
app.use("/api/contacts", apiContactsRoute);
app.use("/api/about", apiAboutRoute);

/* ADMIN Routes */
const adminIndexRoute = require("./routes/admin/indexRoute");
const adminProjectsRoute = require("./routes/admin/projectsRoute");
const adminContactsRoute = require("./routes/admin/contactsRoute");
const adminAboutRoute = require("./routes/admin/aboutRoute");
app.use("/", adminIndexRoute);
app.use("/projects", adminProjectsRoute);
app.use("/contacts", adminContactsRoute);
app.use("/about", adminAboutRoute);

app.get("/", function(req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.use(express.static("assets"));

/* Error handling */
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

/* Connect to mongoDB */
const mongoose = require("mongoose");
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("connected to db");
});

app.listen(PORT, HOST);

console.log(`Server started on ${PORT}:${HOST}`);
