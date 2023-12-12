const bcrypt = require('bcrypt');

const usuarios = [
  { id: 1, username: 'usuario1', senha: '$2b$10$Svn1pVYEBWbxdF5Gq7oqNuJn77zIzvnR8YSnKdIYSqTSJ5PJgP.FO' },
];

function buscarUsuarioPorUsername(username) {
  return usuarios.find(u => u.username === username);
}

function buscarUsuarioPorId(id) {
  return usuarios.find(u => u.id === id);
}

function cadastrarUsuario(usuario) {
  const novoUsuario = { id: usuarios.length + 1, ...usuario };
  novoUsuario.senha = bcrypt.hashSync(novoUsuario.senha, 10); // Hash da senha
  usuarios.push(novoUsuario);
  return novoUsuario;
}

function atualizarUsuario(id, usuarioAtualizado) {
  const index = usuarios.findIndex(u => u.id === id);
  if (index !== -1) {
    usuarios[index] = { id, ...usuarioAtualizado };
    return usuarios[index];
  } else {
    throw { id: 404, message: 'Usuário não encontrado' };
  }
}

function deletarUsuario(id) {
  const index = usuarios.findIndex(u => u.id === id);
  if (index !== -1) {
    const usuarioDeletado = usuarios.splice(index, 1);
    return usuarioDeletado[0];
  } else {
    throw { id: 404, message: 'Usuário não encontrado' };
  }
}

function listarUsuarios() {
  return usuarios;
}

module.exports = {
  buscarUsuarioPorUsername,
  buscarUsuarioPorId,
  cadastrarUsuario,
  atualizarUsuario,
  deletarUsuario,
  listarUsuarios,
};
