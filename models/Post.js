const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    userId: {
        type: String,
        required: true
    },
    postDate: {
        type: Date,
        default: Date.now()
    },
    likeCount: {
        type: Number,
        default: 0
    }


})

module.exports = mongoose.model('Post', PostSchema)
