const Post = require('../models/Post')
const cloudinary = require("../middleware/cloudinary")

module.exports = {
    getPosts: async(req, res) => {
        console.log(req.user)
        try {
            const postItems = await Post.find({ userId: req.user.id })
            res.render('post.ejs', { posts: postItems, user: req.user })
        } catch (err) {
            console.log(err)
        }
    },
    createPost: async(req, res) => {
        try {
            const imageUrl = await cloudinary.uploader.upload(req.file.path)
            console.group(imageUrl)
            // await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
            console.log(req.file)
            console.log('Post has been added!')
            res.redirect('/post')
        } catch (err) {
            console.log(err)
        }
    }
}