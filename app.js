require("dotenv").config();
const express = require('express')
const path = require("path");
const cors=require("cors");
const connDB = require("./db");
const app = express()
const static_path = path.join(__dirname, "public");

connDB();

const timerRoutes = require("./routes/timer")

app.use(express.static(static_path));

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));

app.use("/api", timerRoutes)

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

