const db = require('../config/db');

exports.joinQueue = (req, res) => {
    const { userId} = req.body;
    db.query('INSERT INTO queue (user_id) VALUES (?)', [userId], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error joining queue' });
        }
        res.status(200).json({ message: 'Joined queue successfully' });
    });
};

exports.getQueue = (req, res) => {
    db.query('SELECT * FROM queue ORDER BY joined_at', (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error fetching queue' });
        }
        res.status(200).json(results);
    });
};

exports.leaveQueue = (req, res) => {
    const { userId } = req.body;
    db.query('DELETE FROM queue WHERE user_id = ?', [userId], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Error leaving queue' });
        }
        res.status(200).json({ message: 'Left queue successfully' });
    });
};
