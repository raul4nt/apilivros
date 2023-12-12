const authService = require('../service/authService');
const usuarioRepository = require('../repository/usuarioRepository');

function autenticarUsuario(req, res) {
  const { username, senha } = req.body;

  try {
    const token = authService.autenticarUsuario(username, senha);
    res.json({ token });
  } catch (err) {
    res.status(err.id).json({ msg: err.message });
  }
}

module.exports = {
  autenticarUsuario,
};
