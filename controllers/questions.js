const Questions = require("../models/questions")

const addQuestions = async (req, res) => {
    const questions = req.body.questions
    questions.forEach(({question,answerIndex,category,caption,link}) => {
        console.log(question)
        const newQuestion = new Questions({
            question,
            answerIndex,
            category,
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
const getQuestions = async (req,res)=>{
    try{
        const contraception = await Questions.find({category: "Contraception"}).limit(4);
        const IST = await Questions.find({category: "IST"}).limit(4);
        const Consentement = await Questions.find({category: "Consentement"}).limit(4);
        const Orentiation = await Questions.find({category: "Orientation"}).limit(4);
        res.status(200).json({success: true, data: {
            questions: [...contraception,...IST,...Consentement,...Orentiation].sort((a, b) => 0.5 - Math.random())
        }})
    }catch(error){
        res.status(409).send({success: false, data: [], error: error})
    }
}

module.exports = {
    getQuestions,
    addQuestions 
}