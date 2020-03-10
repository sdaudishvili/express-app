const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.set('useCreateIndex', true);

const saltRounds = 10;

/**
 * @typedef AdminModel
 * @property {string} email.required
 * @property {string} password.required
 */
const AdminSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createDate: { type: Date, default: new Date() }
});

AdminSchema.pre('save', function(next) {
    if (this.isNew || this.isModified('password')) {
        const document = this;
        bcrypt.hash(document.password, saltRounds, (err, hashedPassword) => {
            if (err) {
                next(err);
            } else {
                document.password = hashedPassword;
                next();
            }
        });
    } else {
        next();
    }
});

function isCorrectPassword(password, callback) {
    bcrypt.compare(password, this.password, (err, same) => {
        if (err) {
            callback(err);
        } else {
            callback(err, same);
        }
    });
}

AdminSchema.methods.isCorrectPassword = isCorrectPassword;

module.exports = mongoose.model('Admin', AdminSchema);
