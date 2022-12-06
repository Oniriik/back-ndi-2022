const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
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
        const Orientation = await Questions.find({category: "Orientation"}).limit(4);
        res.status(200).json({success: true, data: {
            questions: [...contraception,...IST,...Consentement,...Orientation].sort((a, b) => 0.5 - Math.random())
        }})
    }catch(error){
        res.status(409).send({success: false, data: [], error: error})
    }
}

const openAi = async(req,res)=>{
        console.log('here')
      try{
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt:req.body.prompt,
            temperature: 0.9,
            max_tokens: 150,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
          });
        res.status(200).json({success: true, data: {answer:response.data.choices[0].text}})
    }catch(error){
        res.status(409).send({success: false, data: [], error: error})
    }
}
module.exports = {
    getQuestions,
    addQuestions,
    openAi
}