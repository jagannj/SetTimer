const mongoose = require("mongoose")
const url = process.env.URL;

const connDB = async () => {
    try {
        const conn = await mongoose.connect(url)
        console.log("Database created!");
        return conn
    } catch (err) {
        console.log(err);
        process.emit(1);
    }
};

module.exports = connDB