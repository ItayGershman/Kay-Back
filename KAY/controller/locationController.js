const { spawn } = require('child_process');
const Location = require('../models/Location')

exports.locationController = {
    async createLocation(req, res) {
        try {
            location = new Location({
                locationName: req.body.locationName,
                fromPosition: req.body.fromPosition,
                xFromCurrPosition: req.body.xFromCurrPosition,
                yFromCurrPosition: req.body.yFromCurrPosition
            });
            await location.save(err => {
                if (err) {
                    res.status(500).send(`${err}`);
                } else {
                    res.status(200).json(location)
                }
            });
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async getLocation(req, res) {
        try {
            const location = await Location.findOne({ locationName: req.params.locationName })
            if (location) {
                //Check python script
                var dataToSend;
                // spawn new child process to call the python script
                const python = spawn('python', ['script.py', req.params.locationName]);
                // collect data from script
                python.stdout.on('data', function (data) {
                    console.log('Pipe data from python script ...');
                    dataToSend = data.toString();
                });
                // in close event we are sure that stream from child process is closed
                python.on('close', (code) => {
                    console.log(`child process close all stdio with code ${code}`);
                    console.log('dataTosend:', dataToSend)
                });

                res.status(200).json(location)

            }
            else res.status(400).send(`Did not find location with this name`);
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    },
    async setLocation(req, res) {
        try {
            if (req.params.locationName === undefined)
                return res.status(400).send(`Location name is wrong`);
            await Location.updateOne(
                { locationName: req.params.locationName },
                {
                    $set: {
                        locationName: req.body.locationName,
                        fromPosition: req.body.fromPosition,
                        xFromCurrPosition: req.body.xFromCurrPosition,
                        yFromCurrPosition: req.body.yFromCurrPosition
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
    async deleteLocation(req, res) {
        try {
            if (req.params.locationName === undefined)
                return res.status(400).send(`Location name is wrong`);
            await Location.deleteOne(
                { locationName: req.params.locationName },
                (err, result) => {
                    if (err) res.status(400).send(`${err}`)
                    else {
                        return res.status(200).send(`Location Deleted Successfuly`);
                    }
                }
            );
        } catch (err) {
            console.log(err)
            res.status(500).send(`${err}`);
        }
    },
}