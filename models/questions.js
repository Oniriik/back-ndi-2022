const mongoose = require("mongoose");

const Questions = new mongoose.Schema({
    question:{
        type: String,
        required: true
    },
    answerIndex:{
        type: Number,
        required: true
    },
    answers:{
        type: [Object],
        required: true
    },
    category:{
        type: String,
        required: true
    },
    caption:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Questions", Questions)