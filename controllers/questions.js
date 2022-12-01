const Questions = require("../models/questions")


// get all questions
const getQuestions = async (req, res) => {
    console.log(req.body)
    res.status(200).send({success: true})
}
const addQuestions = async (req, res) => {
    const questions = req.body.questions
    questions.forEach(({question,answerIndex,categories,caption,link}) => {
        console.log(question)
        const newQuestion = new Questions({
            question,
            answerIndex,
            categories,
            caption,
            link
        })
        try {
            newQuestion.save();
            
        } catch (error) {
            res.status(500).send({success: false, error})
        }
        
    },
    res.status(200).send({success: true})
    );
}

module.exports = {
    getQuestions,
    addQuestions 
}