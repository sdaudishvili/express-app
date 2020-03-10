const mongoose = require('mongoose');

const ContactsSchema = new mongoose.Schema({
    phone: { type: String, default: '' },
    email: { type: String, default: '' },
    address: { type: String, default: '' }
});

module.exports = mongoose.model('Contacts', ContactsSchema);
