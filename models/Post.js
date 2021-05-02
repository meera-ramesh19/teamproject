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


})

module.exports = mongoose.model('Post', PostSchema)
