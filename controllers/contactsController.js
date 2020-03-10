const ControllerBase = require('./controllerBase');
const ContactsModel = require('../models/contactsModel');

class ContactsController extends ControllerBase {
    async getContacts() {
        try {
            const contacts = await ContactsModel.findOne();
            this.ok(contacts);
        } catch (err) {
            this.error(err);
        }
    }

    async updateContacts() {
        try {
            const doc = await ContactsModel.findOne();
            if (doc === null) {
                const contacts = new ContactsModel({
                    phone: this.body.phone,
                    email: this.body.email,
                    address: this.body.address
                });
                await contacts.save();
            } else {
                Object.keys(this.body).map((key) => {
                    doc[key] = this.body[key];
                    return false;
                });
                await doc.save();
            }

            this.created();
        } catch (err) {
            this.error(err);
        }
    }
}

module.exports = ContactsController;
