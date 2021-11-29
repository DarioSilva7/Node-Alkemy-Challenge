const {Character, Film} = require('../../db')

exports.getCharacterDetail = async (req, res) =>{
    try{
    const theCharacter = await Character.findByPk(
        id,{
            include: [Film]
        })
    res.json(theCharacter)}
    catch(err){
        res.send(err)
    }
} 