const Users = require("../models/users")


// get all users
const getUsers = async (req, res) => {
    console.log(req.body)
    res.status(200).send({success: true})
}

const addUser = async (req, res) => {
    console.log(req.body)
    try{
        const {name, email, password } = req.body

        const newUser = new Users({
            name,
            email,
            password
        })

        const savedUsers = await newUser.save()
        console.log('saved')
        res.status(200).json({success: true, data: savedUsers})

    }catch(error){
        console.log('error')
        res.status(409).send({success: false, data: [], error: error})
    }
}

module.exports = {
    getUsers,
    addUser
}