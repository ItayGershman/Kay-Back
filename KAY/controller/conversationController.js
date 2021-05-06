const Conversation = require('../models/Conversation')
const moment = require('moment')


exports.conversationController = {
    async createConversation(req, res) {
        try {
            let date = moment(new Date()).format("DD/MM/YYYY");
            const filter = {}
            let count = await Conversation.find(filter).count()
            conversation = new Conversation({
                date: date,
                title: `${date}-${count + 1}` ,
                text: req.body.text
            });
            await conversation.save(err => {
                if (err) {
                    res.status(500).send(`${err}`);
                } else {
                    res.status(200).json(conversation)
                }
            });
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async getConversation(req, res) {
        try {
            const conversation = await Conversation.findOne({ date: req.params.date, title: req.params.title })
            if (conversation) res.status(200).json(conversation)
            else res.status(400).send(`Did not find conversation with at this date and title`);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async getAllConversations(req, res) {
        try {
            const filter = {}
            const conversation = await Conversation.find(filter)
            if (conversation) res.status(200).json(conversation)
            else res.status(400).send(`Did not find conversations in the colletion`);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },

    async deleteConversation(req, res) {
        try {
            const conversation = await Conversation.findOne({ date: req.params.date, title: req.params.title  })
            if (conversation === null) {
                return res.status(400).send(`Conversation date or title is wrong`);
            }
            if (req.params.date === undefined || req.params.title === undefined)
                return res.status(400).send(`Scenario name is wrong`);
            await Conversation.deleteOne(
                { date: req.params.date, title: req.params.title },
                (err, result) => {
                    if (err) res.status(400).send(`${err}`)
                    else {
                        return res.status(200).send(`Conversation Deleted Successfuly`);
                    }
                }
            );
        } catch (err) {
            console.log(err)
            res.status(500).send(`${err}`);
        }
    },
}