const ControllerBase = require("./controllerBase");

class ContactsController extends ControllerBase {
  getContacts() {
    try {
      const contacts = {
        phone: "55555555",
        address: "adsfasdfasdf",
        email: "asdfasd@gmail.com"
      };

      this.ok(contacts);
    } catch (err) {
      this.error(err);
    }
  }
}

module.exports = ContactsController;
