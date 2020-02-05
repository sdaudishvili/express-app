const ControllerBase = require("./controllerBase");
const AdminModel = require("../models/adminModel");

const jwt = require('jsonwebtoken');

const secret = '#$%ASF%safd';


class AdminCotroller extends ControllerBase {
  async getContacts() {
    try {
      const contacts = await AdminModel.findOne();
      this.ok(contacts);
    } catch (err) {
      this.error(err);
    }
  }

  async registerAdmin() {
    try {
      const admin = await AdminModel.findOne({email: this.body.email});
      if (admin !== null) {
        this.send({statusCode: 409, data: 'User is already registered'});
      } else {
        const newAdmin = new AdminModel({ email: this.body.email, password: this.body.password });
        newAdmin.save((err) => {
          if (err) {
            this.error(err);
          } else {
            this.created();
          }
        });
      }
    } catch (err) {
      this.error(err);
    }
  }


  async authenticateAdmin() {
    try {
      const admin = await AdminModel.findOne({email: this.body.email});
      if (admin === null) {
        this.send({statusCode: 401, data: 'Incorrect email or password'});
      } else {
        admin.isCorrectPassword(this.body.password, (err, same) => {
          if (err) {
            this.error(err);
          } else if (!same) {
            this.send({statusCode: 401, data: 'Incorrect email or password'});
          } else {
            const payload = { email: this.body.email };
            const token = jwt.sign(payload, secret, {
              expiresIn: '1h'
            });
            this.ok({token});
          }
        });
      }
    } catch (err) {
      this.error(err);
    }
  }
}
module.exports = AdminCotroller;
