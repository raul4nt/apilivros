const clienteService = require('../service/clienteService');

function cadastrarCliente(req, res) {
  const cliente = req.body;
  try {
    const clienteCadastrado = clienteService.cadastrarCliente(cliente);
    res.status(201).json(clienteCadastrado);
  } catch (err) {
    res.status(err.id).json({ msg: err.message });
  }
}

module.exports = {
  cadastrarCliente,
};
