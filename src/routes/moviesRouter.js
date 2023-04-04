const express = require('express');
const Controller = require('../controllers/getMovies');

const router = express.Router();

router.get('/movies', Controller.getMovies);

module.exports = router;
