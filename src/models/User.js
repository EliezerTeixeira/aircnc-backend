const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        ref: 'user'
    },

    createdAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)