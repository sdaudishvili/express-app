const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    shortDescription: { type: String, default: '' },
    country: { type: String, default: '' },
    language: { type: String, default: 'en' },
    finished: { type: Boolean, default: false },
    createDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Projects', ProjectSchema);
