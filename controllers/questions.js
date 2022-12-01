const Questions = require("../models/questions")


// get all questions
const getQuestions = async (req, res) => {
    console.log(req.body)
    res.status(200).send({success: true})
}


module.exports = {
    getQuestions
}