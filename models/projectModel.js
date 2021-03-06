const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: { type: String, default: null },
    description: { type: String, default: null },
    shortDescription: { type: String, default: null },
    country: { type: String, default: null },
    language: { type: String, default: 'en' },
    finished: { type: Boolean, default: false },
    image: { type: String, default: null },
    shareImage: { type: String, default: null },
    deleteDate: { type: Date, default: null },
    createDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Projects', ProjectSchema);
