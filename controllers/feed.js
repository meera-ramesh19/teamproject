const Post = require('../models/Post')
const User = require('../models/User')

module.exports = {
    getPosts: async(req, res) => {
        try {
            const postItems = await Post.find()
            console.log(postItems)
            res.render('feed.ejs', { posts: postItems, user: req.user })
        } catch (err) {
            console.log(err)
        }
    },

    addLike: async(req, res) => {
        try {
            const uid = req.user.id
            const postId = req.body.postId
            //get the post with the matching id the add it to array of liked posts in the user model
            const post = await Post.find({_id: postId})
            const result =  await User.updateOne({_id:uid}, {likedPosts:post})
            // const result = await User.find({_id: uid, "likedPosts._id":postId})
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
}