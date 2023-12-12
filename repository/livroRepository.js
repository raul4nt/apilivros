const livros = [];

function cadastrarLivro(livro) {
  const novoLivro = { id: livros.length + 1, ...livro, disponivel: true };
  livros.push(novoLivro);
  return novoLivro;
}

function listarLivros() {
  return livros;
}

function buscarLivroPorId(id) {
  return livros.find(livro => livro.id === id);
}

function buscarLivrosPorAutor(autor) {
  return livros.filter(livro => livro.autor === autor);
}

function buscarLivroPorNome(nome) {
  return livros.filter(livro => livro.titulo.toLowerCase().includes(nome.toLowerCase()));
}

function buscarLivrosDisponiveis() {
  return livros.filter(livro => livro.disponivel);
}

function atualizarLivro(id, livroAtualizado) {
  const index = livros.findIndex(livro => livro.id === id);
  if (index !== -1) {
    livros[index] = { id, ...livroAtualizado };
    return livros[index];
  } else {
    throw { id: 404, message: 'Livro não encontrado' };
  }
}

function deletarLivro(id) {
  const index = livros.findIndex(livro => livro.id === id);
  if (index !== -1) {
    const livroDeletado = livros.splice(index, 1);
    return livroDeletado[0];
  } else {
    throw { id: 404, message: 'Livro não encontrado' };
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
};
