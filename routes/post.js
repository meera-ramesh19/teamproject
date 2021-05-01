const express = require('express')
const router = express.Router()
const postController = require('../controllers/post')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const upload = require('../middleware/multer')

router.get('/', ensureAuth, postController.getPosts)

router.post('/createPost', upload.single('myFile'), postController.createPost)
router.delete('/deletePost', postController.deletePost)

module.exports = router