const jwt = require('jsonwebtoken');
const usuarioRepository = require('../repository/usuarioRepository');

function autenticarUsuario(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ msg: 'Token não fornecido. Acesso não autorizado.' });
  }

  try {
    const decoded = jwt.verify(token, 'senha');

    req.usuario = usuarioRepository.buscarUsuarioPorId(decoded.userId);
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token inválido. Acesso não autorizado.' });
  }
}

module.exports = {
  autenticarUsuario,
};
