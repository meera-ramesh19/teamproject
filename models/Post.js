const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    image: {
        type:String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
  })
  
  module.exports = mongoose.model('Post', PostSchema)