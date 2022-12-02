const express = require("express");
const {
    getQuestions,
    addQuestions,
    openAi
} = require("../controllers/questions");


const router = express.Router();

router.get("/get", getQuestions);
router.post("/add",addQuestions)
router.post("/openai",openAi)
module.exports = router;
