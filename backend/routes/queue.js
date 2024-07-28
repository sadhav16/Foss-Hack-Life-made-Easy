const express = require('express');
const queueController = require('../controllers/queue');
const authMiddleware = require('../middlewares/auth');
const router = express.Router();

router.post('/join', authMiddleware.isLoggedIn, queueController.joinQueue);
router.get('/get', authMiddleware.isLoggedIn, queueController.getQueue);
router.post('/leave', authMiddleware.isLoggedIn, queueController.leaveQueue);

module.exports = router;
