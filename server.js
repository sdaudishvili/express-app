const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Config */
const PORT = config.get("api.port");
const HOST = config.get("api.host");
const connectionString = config.get("api.connectionString");


/* Routes */
const projectsRoute = require("./routes/projectsRoute");
const contactsRoute = require("./routes/contactsRoute");
const aboutRoute = require("./routes/aboutRoute");
app.use("/api/projects", projectsRoute);
app.use("/api/contacts", contactsRoute);
app.use("/api/about", aboutRoute);

/* Error handling */
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});



/* Connect to mongoDB */
const mongoose = require('mongoose');
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});


app.listen(PORT, HOST);

console.log(`Server started on ${PORT}:${HOST}`);
