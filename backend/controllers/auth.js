const db = require('../config/db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { promisify } = require('util');

exports.register = (req, res) => {
    const { name, email, password, passwordConfirm } = req.body;
    db.query('SELECT email FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Database error' });
        } else {
            if (results.length > 0) {
                return res.status(400).json({ message: 'The email is already in use' });
            } else if (password !== passwordConfirm) {
                return res.status(400).json({ message: 'Passwords do not match' });
            }
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        db.query('INSERT INTO users SET ?', { name: name, email: email, password: hashedPassword }, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Database error' });
            } else {
                return res.status(201).json({ message: 'User registered' });
            }
        });
    });
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide an email and password' });
        }

        db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
            if (!results || !await bcrypt.compare(password, results[0].password)) {
                return res.status(401).json({ message: 'Email or Password is incorrect' });
            } else {
                const id = results[0].id;
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                res.cookie('userSave', token, {
                    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httpOnly: true
                });

                res.status(200).json({ message: 'Login successful' });
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.logout = (req, res) => {
    res.cookie('userSave', 'logout', {
        expires: new Date(Date.now() + 2 * 1000),
        httpOnly: true
    });
    res.status(200).json({ message: 'Logout successful' });
};
