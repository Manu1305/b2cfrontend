const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
    ,
    password: {
        type: String,
    },
    phone: {
        type: Number,

    }
})

const User = Mongoose.model('User', userSchema)
module.exports = User


