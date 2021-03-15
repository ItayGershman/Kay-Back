const User = require('../models/User')
const { getToken } = require('../utils')

exports.userController = {

    async signIn(req, res) {
        try {
            const signinUser = await User.findOne({
                userEmail: req.body.userEmail,
                userPassword: req.body.userPassword,
            });
            if (signinUser) {
                res.send({
                    _id: signinUser._id,
                    firstName: signinUser.firstName,
                    lastName: signinUser.lastName,
                    userEmail: signinUser.userEmail,
                    token: getToken(signinUser),
                });
            } else {
                res.status(401).send({ msg: 'Invalid email or password' });
            }
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },

    async createUser(req, res) {
        try {
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userPassword: req.body.userPassword,
                userEmail: req.body.userEmail
            });
            const newUser = await user.save();
            if (newUser) {
                res.status(201).send({
                    _id: newUser._id,
                    name: newUser.name,
                    email: newUser.email,
                    isAdmin: newUser.isAdmin,
                    token: getToken(newUser),
                });
            } else {
                res.status(401).send({ msg: 'Invalid User Data' });
            }
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async getUser(req, res) {
        try {
            const user = await User.findOne({ userEmail: req.params.userEmail })
            if (user) {
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