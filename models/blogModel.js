const mongoose = require('mongoose');

const BlogsSchema = new mongoose.Schema({
    title: { type: String, default: null },
    description: { type: String, default: null },
    shortDescription: { type: String, default: null },
    image: { type: String, default: null },
    shareImage: { type: String, default: null },
    deleteDate: { type: Date, default: null },
    createDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', BlogsSchema);
