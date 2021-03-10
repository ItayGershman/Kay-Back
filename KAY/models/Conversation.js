const { Schema, model } = require('mongoose');
const scenarioSchema = require('./Scenario')

const conversationSchema = new Schema({
    startConversationDate: {
        type: Date,
        required: true
    },
    endConversationDate: {
        type: Date,
        required: true
    },
    userInput: {
        type: String,
        required: true
    },
    // intent: intentShcema,
    // entity: entitySchema,
    // kayOutput: { type: scenarioSchema}
})

module.exports = model('conversations', conversationSchema);