const express = require('express');
const router = express.Router();
const autorController = require('../controller/autorController');

router.post('/', autorController.cadastrarAutor);

module.exports = router;
