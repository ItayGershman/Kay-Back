const User = require('../models/User')

exports.userController = {
    async createUser(req, res) {
        console.log(`req.body: ${JSON.stringify(req.body)}`)
        try {
            user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userPassword: req.body.userPassword,
                userEmail: req.body.userEmail
            });
            await user.save(err => {
                if (err) {
                    res.status(500).send(`${err}`);
                } else {
                    res.status(200).json(user)
                }
            });
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }
}