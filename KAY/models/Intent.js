const { Schema, model } = require('mongoose');

const intentSchema = new Schema({
    scnearioConnection: {
        type: String
    },
    intentName: {
        type: String,
        required: true
    },
    outputTextIntent: {
        type: Array,
        outputValue: [String]
    }
})

module.exports = model('intents', intentSchema);