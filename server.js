const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");

const PORT = config.get("api.port");
const HOST = config.get("api.host");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const booksRoute = require("./routes/booksRoute");
const contactsRoute = require("./routes/contactsRoute");
const aboutRoute = require("./routes/aboutRoute");
app.use("/api/books", booksRoute);
app.use("/api/contacts", contactsRoute);
app.use("/api/about", aboutRoute);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});

app.listen(PORT, HOST);

console.log(`Server started on ${PORT}:${HOST}`);
