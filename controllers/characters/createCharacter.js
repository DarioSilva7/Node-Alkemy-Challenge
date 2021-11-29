const { Character } = require("../../db")

exports.createCharacter= async (req, res)=>{
    const infoCharacter= await Character.create(req.body)
    res.json(infoCharacter)
}