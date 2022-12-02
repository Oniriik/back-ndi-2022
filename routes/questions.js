const express = require("express");
const {
    getQuestions,
    addQuestions
} = require("../controllers/questions");


const router = express.Router();

router.get("/get", getQuestions);
router.post("/add",addQuestions)
module.exports = router;
