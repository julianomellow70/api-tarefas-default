const express = require('express')
const route = express.Router()
const tarefaController = require('../controllers/tarefaController')
const apiController = require('../controllers/apiController')
route.get('/',apiController.verifica,tarefaController.listar)
//listar por id
route.get('/:id',tarefaController.listarPorID)
route.post('/',tarefaController.inserir)
route.put('/:id',tarefaController.alterar)
route.delete('/:id',tarefaController.excluir)
module.exports = route
