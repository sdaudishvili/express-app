const express = require('express');

const router = express.Router();
const AboutController = require('../../controllers/aboutController');
const Authorized = require('../../middlewares/Authorized');

function send({ statusCode, err, data }, res) {
    if (err === undefined) {
        if (statusCode === 201) console.log('About us has been succesfully updated');
        res.status(statusCode).send(data);
    } else {
        console.log(`${statusCode} code while updating about us`);
        console.log(err);
        res.status(statusCode).send(err);
    }
}

/**
 * This function comment is parsed by doctrine
 * @route GET /about
 * @group about
 * @returns {Object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */

router.get('/', (req, res, next) => {
    new AboutController({
        params: req.params,
        query: req.query,
        body: req.body,
        send: (data) => send(data, res)
    }).getAbout();
});

/**
 * This function comment is parsed by doctrine
 * @route POST /about
 * @group about
 * @param {AboutModel.model} AdminModel.body.required - username or email
 * @returns {Object} 200 - Success
 * @returns {Error}  default - Unexpected error
 */

router.post('/', (req, res, next) => {
    new AboutController({
        params: req.params,
        query: req.query,
        body: req.body,
        send: (data) => send(data, res)
    }).updateAbout();
});

module.exports = router;
