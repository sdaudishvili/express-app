const express = require('express');

const router = express.Router();
const multer = require('multer');
const sha256 = require('js-sha256');
const Authorized = require('../../middlewares/Authorized');

const fileTypes = ['jpg', 'png', 'jpeg', 'bmp'];

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'assets/images');
    },
    filename(req, file, cb) {
        cb(null, `${sha256(file.originalname)}.${file.originalname.split('.').pop()}`);
    }
});

const upload = multer({
    storage,
    fileFilter(req, file, cb) {
        if (!fileTypes.includes(file.originalname.split('.').pop())) {
            return cb('Only images are allowed');
        }
        cb(null, true);
    }
}).single('image');

router.post('/', Authorized, function(req, res, next) {
    upload(req, res, function(err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).send(err);
        }
        if (err) {
            return res.status(500).send(err);
        }
        return res.status(200).send(req.file);
    });
});

module.exports = router;
