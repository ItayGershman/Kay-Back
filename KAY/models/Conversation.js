const { Schema, model } = require('mongoose');

const conversationSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: Object,
        required: true
    }
})

module.exports = model('conversations', conversationSchema);