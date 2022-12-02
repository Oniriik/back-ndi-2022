const express = require("express");
const questions = require("./routes/questions");
require("dotenv/config")
const mongoose = require("mongoose");
const cors = require('cors')


const app = express();


// app middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
// middleware for routes
app.use("/questions", questions)


// mongoDB connection
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connection to DB established");
})

app.listen(3002, () => {
    console.log("Server running on port 3002...");
})
app.get('/',(req,res)=>{
    res.status(200).send({success: true, data:'ONLY CODE CHADS NDI 2022'})
})