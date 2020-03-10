const mongoose = require('mongoose');

/**
 * @typedef AboutModel
 * @property {string} title.required
 * @property {string} content.required
 */

const AboutSchema = new mongoose.Schema({
    title: String,
    content: String
});

AboutSchema.pre('save', function(next) {
    console.log('asdf');
    next();
});

module.exports = mongoose.model('About', AboutSchema);
