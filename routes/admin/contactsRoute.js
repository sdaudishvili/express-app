const express = require('express');

const router = express.Router();
const ContactsController = require('../../controllers/ContactsController');

router.get('/', async function(req, res) {
    await new ContactsController({
        params: req.params,
        query: req.query,
        body: req.body,
        send: ({ statusCode, data }) => {
            contactsInfo = data;
        }
    }).getContacts();
    res.render('contacts', {
        title: 'Hey',
        message: 'contact page',
        contactsInfo,
        myfunc: () => {
            console.log('asdf');
        }
    });
});

module.exports = router;
