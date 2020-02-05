const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  shortDescription: String,
  country: String,
  language: String,
});


module.exports = mongoose.model('Projects', ProjectSchema);
