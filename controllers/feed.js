const Post = require('../models/Post')

module.exports = {
    getPosts: async(req, res) => {
        // res.render('feed.ejs')
        try {
            const postItems = await Post.find()
            // console.log(postItems)
            res.render('feed.ejs', { posts: postItems, user: req.user })
        } catch (err) {
            console.log(err)
        }
    },
    
}