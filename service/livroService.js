const livroRepository = require('../repository/livroRepository');


function cadastrarLivro(livro) {
  return livroRepository.cadastrarLivro(livro);
}



function listarLivros() {
  return livroRepository.listarLivros();
}

function buscarLivroPorId(id) {
  return livroRepository.buscarLivroPorId(id);
}

function buscarLivrosPorAutor(autor) {
  return livroRepository.buscarLivrosPorAutor(autor);
}

function buscarLivroPorNome(nome) {
  return livroRepository.buscarLivroPorNome(nome);
}

function buscarLivrosDisponiveis() {
  return livroRepository.buscarLivrosDisponiveis();
}

function atualizarLivro(id, livroAtualizado) {
  return livroRepository.atualizarLivro(id, livroAtualizado);
}

function deletarLivro(id) {
  return livroRepository.deletarLivro(id);
}

function retirarLivro(idLivro, idCliente) {
  return livroRepository.retirarLivro(idLivro, idCliente);
}

function devolverLivro(idLivro, idCliente) {
  return livroRepository.devolverLivro(idLivro, idCliente);
}

function verificarAtraso(idLivro, idCliente) {
  return livroRepository.verificarAtraso(idLivro, idCliente);
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
