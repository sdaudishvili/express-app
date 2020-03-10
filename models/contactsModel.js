const mongoose = require('mongoose');

const ContactsSchema = new mongoose.Schema({
    phone: String,
    email: String,
    address: String
});

module.exports = mongoose.model('Contacts', ContactsSchema);
