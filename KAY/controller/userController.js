const User = require('../models/User')

exports.userController = {
    async createUser(req, res) {
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
    },
    async getUser(req, res) {
        try {
            const user = await User.findOne({ userEmail: req.params.userEmail })
            if (user){
                res.header('Cache-Control', 'no-store');
                res.status(200).json(user.firstName + " " + user.lastName)
            } 
            else res.status(400).send(`Did not find user with this email`);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async setUser(req, res) {
        try {
            if (req.params.userEmail === undefined)
                return res.status(400).send(`Email is wrong`);
            await User.updateOne(
                { userEmail: req.params.userEmail },
                {
                    $set: {
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        userPassword: req.body.userPassword,
                        userEmail: req.body.userEmail
                    }
                },
                (err, result) => {
                    if (err) res.status(400).send(`${err}`)
                    else {
                        return res.status(200).json(true);
                    }
                }
            );
        } catch (err) {
            console.log(err)
            res.status(500).send(`${err}`);
        }
    },
    async deleteUser(req, res) {
        try {
            if (req.params.userEmail === undefined)
                return res.status(400).send(`Email is wrong`);
            await User.deleteOne(
                { userEmail: req.params.userEmail },
                (err, result) => {
                    if (err) res.status(400).send(`${err}`)
                    else {
                        return res.status(200).send(`User Deleted Successfuly`);
                    }
                }
            );
        } catch (err) {
            console.log(err)
            res.status(500).send(`${err}`);
        }
    },
}