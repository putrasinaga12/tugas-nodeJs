const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();

router.get('/api', Controller.helloWorld);
router.get('/favorite', Controller.favoriteMovies);

module.exports = router;
