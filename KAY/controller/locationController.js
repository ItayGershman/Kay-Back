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
            if (location) res.status(200).json(location)
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