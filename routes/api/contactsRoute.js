const express = require('express');

const router = express.Router();
const ContactsController = require('../../controllers/contactsController');
const Authorized = require('../../middlewares/Authorized');

function send({ statusCode, err, data }, res) {
    if (err === undefined) {
        if (statusCode === 201) console.log('Contacts has been succesfully updated');
        res.status(statusCode).send(data);
    } else {
        console.log(`${statusCode} code while updating contacts`);
        console.log(err);
        res.status(statusCode).send(err);
    }
}

router.get('/', (req, res, next) => {
    new ContactsController({
        params: req.params,
        query: req.query,
        body: req.body,
        send: (data) => send(data, res)
    }).getContacts();
});

router.post('/', Authorized, (req, res, next) => {
    new ContactsController({
        params: req.params,
        query: req.query,
        body: req.body,
        send: (data) => send(data, res)
    }).updateContacts();
});

module.exports = router;
