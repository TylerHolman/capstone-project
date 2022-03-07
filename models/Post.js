const mongoose = require(`mongoose`)


const PostsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: false
    },
    rank: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model(`Posts`, PostsSchema)