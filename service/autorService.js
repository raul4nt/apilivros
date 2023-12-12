const autores = [
    { id: 1, nome: 'Autor 1', paisOrigem: 'País 1' }
  ];
  
  function cadastrarAutor(autor) {
    const novoAutor = { id: autores.length + 1, ...autor };
    autores.push(novoAutor);
    return novoAutor;
  }
  
  module.exports = {
    cadastrarAutor,
  };
  