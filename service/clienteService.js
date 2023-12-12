const clientes = [
    { id: 1, matricula: '12345', nome: 'Cliente 1', telefone: '123456789' }
  ];
  
  function cadastrarCliente(cliente) {
    const novoCliente = { id: clientes.length + 1, ...cliente };
    clientes.push(novoCliente);
    return novoCliente;
  }
  
  module.exports = {
    cadastrarCliente,
  };
  