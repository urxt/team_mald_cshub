const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    schoolYear: {
        type: Number,
        default: 1,
        required: true
    },
    age: {
        type: Number,
        default: 0,
        required: true
    },
    gender: {
        type: String,
        required: false
    }
})

const Users = mongoose.model("users", UsersSchema);
module.exports = { Users };