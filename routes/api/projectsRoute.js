const express = require('express');

const router = express.Router();
const ProjectsController = require('../../controllers/projectsController');

function sendFunc(res, statusCode, data) {
    res.status(statusCode).send(data);
}

router.get('/', (req, res, next) => {
    new ProjectsController({
        params: req.params,
        query: req.query,
        body: req.body,
        send: ({ statusCode, data }) => {
            sendFunc(res, statusCode, data);
        }
    }).getProjects();
});

module.exports = router;
