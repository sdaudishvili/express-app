const mongoose = require('mongoose');

/**
 * @typedef AboutModel
 * @property {string} title.required
 * @property {string} content.required
 */

const AboutSchema = new mongoose.Schema({
    title: { type: String, default: '' },
    content: { type: String, default: '' }
});

module.exports = mongoose.model('About', AboutSchema);
