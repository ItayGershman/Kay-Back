const { Schema, model } = require('mongoose');

const intentSchema = new Schema({
    scenarioConnection: {
        type: String
    },
    intentName: {
        type: String,
        required: true
    },
    outputTextIntent: {
        type: Array,
        outputValue: [String]
    },
    entities: {
        type: Array,
        entitiesNode : [String]
    },
    action: {
        type: Object
    }
})

module.exports = model('intents', intentSchema);