const jwt = require('jsonwebtoken');
const usuarioRepository = require('../repository/usuarioRepository');
const bcrypt = require('bcrypt');

function autenticarUsuario(username, senha) {
  const usuario = usuarioRepository.buscarUsuarioPorUsername(username);

  if (!usuario || !bcrypt.compareSync(senha, usuario.senha)) {
    throw { id: 401, message: 'Credenciais inválidas' };
  }

  // Gerar token JWT
  const token = jwt.sign({ userId: usuario.id, username: usuario.username }, 'seuSegredo', { expiresIn: '1h' });

  return { token };
}

module.exports = {
  autenticarUsuario,
};


