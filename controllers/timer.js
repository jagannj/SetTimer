const TimeSchema = require("../models/model")

exports.createTimer = (req, res) => {
    TimeSchema.create({
        timeData: req.body.time
    }).then((data) => {
        res.status(200).json(data)
    }).catch((err) => 
        res.status(400).json(err)
    )
};

exports.averageTime = async (req, res) => {
    try {
        const time = await TimeSchema.find()
        console.log(time);
        if (!time) {
            res.status(400).json({ error: "Times not found" })
        }
    } catch(err) {
        res.status(400).json(err)
    }
}