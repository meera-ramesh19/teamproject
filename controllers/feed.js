const Post = require('../models/Post')

module.exports = {
    getPosts: async(req, res) => {
        try {
            const postItems = await Post.find()
            res.render('feed.ejs', { posts: postItems, user: req.user })
        } catch (err) {
            console.log(err)
        }
    },
    
}