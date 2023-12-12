const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authController.autenticarUsuario);
router.get('/protegido', authMiddleware.autenticarUsuario, (req, res) => {
  res.json({ msg: 'Rota protegida. Acesso autorizado.' });
});

module.exports = router;
