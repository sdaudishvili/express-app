const jwt = require('jsonwebtoken');
const secret = require('config').api.secretString;

const adminRoute = (req, res, next) => {
    const token = req.headers.authorization;
    if (token === undefined) {
        res.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                res.status(401).send('Unauthorized: Invalid token');
            } else {
                req.email = decoded.email;
                next();
            }
        });
    }
};
module.exports = adminRoute;
