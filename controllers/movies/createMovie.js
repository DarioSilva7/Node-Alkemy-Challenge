const { Film } = require("../../db")

exports.createMovie= async (req, res)=>{
    const infoMovie= await Film.create(req.body)
    res.json(infoMovie)
}