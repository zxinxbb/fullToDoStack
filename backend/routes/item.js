const express = require('express')
const router = express.Router()
const itemsController = require('../controllers/items')

router.post('/item' , itemsController.createTodo)
router.get('/items', itemsController.getTodos)

module.exports = router