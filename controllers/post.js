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
            const image = await cloudinary.uploader.upload(req.file.path)
            const imageUrl = image.url
            // console.group(imageUrl)
            // await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
            await Post.create({title: req.body.imageTitle, imageUrl:imageUrl, userId:req.user.id})
            console.log('Post has been added!')
            res.redirect('/post')
        } catch (err) {
            console.log(err)
        }
    }
}