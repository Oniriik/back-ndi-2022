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
    categories:{
        type: [Object],
        required: true
    }
})

module.exports = mongoose.model("Questions", Questions)