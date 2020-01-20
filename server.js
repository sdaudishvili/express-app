const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");

const PORT = config.get("api.port");
const HOST = config.get("api.host");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const projectsRoute = require("./routes/projectsRoute");
const contactsRoute = require("./routes/contactsRoute");
const aboutRoute = require("./routes/aboutRoute");
app.use("/api/projects", projectsRoute);
app.use("/api/contacts", contactsRoute);
app.use("/api/about", aboutRoute);

app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` });
});



const mongoose = require('mongoose');
const uri = 'mongodb+srv://Admin:uLPVytVHYH7v6LPQ@cluster0-2tun0.azure.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
});


const kittySchema = new mongoose.Schema({
  name: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
kittySchema.methods.speak = function () {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

const Kitten = mongoose.model('Kitten', kittySchema);
const fluffy = new Kitten({ name: 'fluffy' });

fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
});


Kitten.find(function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});


app.listen(PORT, HOST);

console.log(`Server started on ${PORT}:${HOST}`);
