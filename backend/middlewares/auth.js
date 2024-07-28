const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const db = require('../config/db');

exports.isLoggedIn = async (req, res, next) => {
    if (req.cookies.userSave) {
        try {
            const decoded = await promisify(jwt.verify)(req.cookies.userSave, process.env.JWT_SECRET);
            db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (err, results) => {
                if (!results || results.length === 0) {
                    return next();
                }
                req.user = results[0];
                return next();
            });
        } catch (err) {
            console.log(err);
            return next();
        }
    } else {
        next();
    }
};
