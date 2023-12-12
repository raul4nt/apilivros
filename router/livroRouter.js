const express = require('express');
const router = express.Router();
const livroController = require('../controller/livroController');

router.get('/', livroController.listarLivros);
router.post('/', livroController.cadastrarLivro);
router.get('/:id', livroController.buscarLivroPorId);
router.get('/autor/:autor', livroController.buscarLivrosPorAutor);
router.get('/nome/:nome', livroController.buscarLivroPorNome);
router.get('/disponiveis', livroController.buscarLivrosDisponiveis);
router.put('/:id', livroController.atualizarLivro);
router.delete('/:id', livroController.deletarLivro);

// Rotas para a funcionalidade de retirada e devolução
router.post('/retirada', livroController.retirarLivro);
router.post('/devolucao', livroController.devolverLivro);
router.post('/verificar-atraso', livroController.verificarAtraso);

module.exports = router;
