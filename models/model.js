const mongoose = require("mongoose");

const timeSchema = new mongoose.Schema({
    timeData: {
        type: Array,
        required: true,
        trim: true,
    },   
}, { timestamps: true }
);

module.exports = mongoose.model("Time", timeSchema);