const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = model('users', userSchema);