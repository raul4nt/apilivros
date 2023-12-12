const express = require('express');
const router = express.Router();
const clienteController = require('../controller/clienteController');

router.post('/', clienteController.cadastrarCliente);

module.exports = router;
