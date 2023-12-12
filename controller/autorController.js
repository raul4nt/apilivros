const autorService = require('../service/autorService');

function cadastrarAutor(req, res) {
  const autor = req.body;
  try {
    const autorCadastrado = autorService.cadastrarAutor(autor);
    res.status(201).json(autorCadastrado);
  } catch (err) {
    res.status(err.id).json({ msg: err.message });
  }
}

module.exports = {
  cadastrarAutor,
};
