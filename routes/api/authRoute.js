const express = require('express');

const router = express.Router();
const AdminController = require('../../controllers/adminController');

function send({ statusCode, err, data }, res) {
    if (err === undefined) {
        res.status(statusCode).send(data);
    } else {
        res.status(statusCode).send({ err });
    }
}

router.post('/register', (req, res, next) => {
    new AdminController({
        params: req.params,
        query: req.query,
        body: req.body,
        send: (data) => send(data, res)
    }).registerAdmin();
});

/**
 * This function comment is parsed by doctrine
 * @route POST /auth/adminAuthenticate
 * @group Auth
 * @param {AdminModel.model} AdminModel.body.required - username or email
 * @returns {object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */

router.post('/adminAuthenticate', (req, res, next) => {
    new AdminController({
        params: req.params,
        query: req.query,
        body: req.body,
        send: (data) => send(data, res)
    }).authenticateAdmin();
});

module.exports = router;
