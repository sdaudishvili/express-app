const ControllerBase = require("./controllerBase");
const ContactsModel = require("../models/contactsModel");

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
      for (const k in this.body) doc[k] = this.body[k];
      await doc.save();
      this.ok(200);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = ContactsController;
