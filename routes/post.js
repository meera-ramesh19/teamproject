const express = require('express')
const router = express.Router()
const todosController = require('../controllers/todos')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const multer = require('multer');
const upload = multer()
    // SET STORAGE
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
router.get('/', ensureAuth, todosController.getTodos)

router.post('/createTodo', upload.single('myFile'), todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router