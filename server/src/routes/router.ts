const express = require('express')
const eventController = require('../controllers/eventController')

const router = express.Router();

router.get('/events', eventController.getAll);

module .exports = router;