const livroService = require('../service/livroService');

function cadastrarLivro(req, res) {
  const livro = req.body;
  try {
    const livroCadastrado = livroService.cadastrarLivro(livro);
    res.status(201).json(livroCadastrado);
  } catch (err) {
    res.status(err.id).json({ msg: err.message });
  }
}


function listarLivros(req, res) {
  const listaLivros = livroService.listarLivros();
  res.json(listaLivros);
}

function buscarLivroPorId(req, res) {
  const id = +req.params.id;
  try {
    const livro = livroService.buscarLivroPorId(id);
    res.json(livro);
  } catch (err) {
    res.status(err.id).json({ msg: err.message });
  }
}

function buscarLivrosPorAutor(req, res) {
  const autor = req.params.autor;
  const livros = livroService.buscarLivrosPorAutor(autor);
  res.json(livros);
}

function buscarLivroPorNome(req, res) {
  const nome = req.params.nome;
  const livros = livroService.buscarLivroPorNome(nome);
  res.json(livros);
}

function buscarLivrosDisponiveis(req, res) {
  const livros = livroService.buscarLivrosDisponiveis();
  res.json(livros);
}

function atualizarLivro(req, res) {
  const id = +req.params.id;
  const livroAtualizado = req.body;
  try {
    const livroAtualizado = livroService.atualizarLivro(id, livroAtualizado);
    res.json(livroAtualizado);
  } catch (err) {
    res.status(err.id).json({ msg: err.message });
  }
}

function deletarLivro(req, res) {
  const id = +req.params.id;
  try {
    const livroDeletado = livroService.deletarLivro(id);
    res.json(livroDeletado);
  } catch (err) {
    res.status(err.id).json({ msg: err.message });
  }
}

function retirarLivro(req, res) {
  const { idLivro, idCliente } = req.body;
  try {
    const resultadoRetirada = livroService.retirarLivro(idLivro, idCliente);
    res.json(resultadoRetirada);
  } catch (err) {
    res.status(err.id).json({ msg: err.message });
  }
}

function devolverLivro(req, res) {
  const { idLivro, idCliente } = req.body;
  try {
    const resultadoDevolucao = livroService.devolverLivro(idLivro, idCliente);
    res.json(resultadoDevolucao);
  } catch (err) {
    res.status(err.id).json({ msg: err.message });
  }
}

function verificarAtraso(req, res) {
  const { idLivro, idCliente } = req.body;
  try {
    const resultadoVerificacao = livroService.verificarAtraso(idLivro, idCliente);
    res.json(resultadoVerificacao);
  } catch (err) {
    res.status(err.id).json({ msg: err.message });
  }
}

module.exports = {
  cadastrarLivro,
  listarLivros,
  buscarLivroPorId,
  buscarLivrosPorAutor,
  buscarLivroPorNome,
  buscarLivrosDisponiveis,
  atualizarLivro,
  deletarLivro,
  retirarLivro,
  devolverLivro,
  verificarAtraso,
};
