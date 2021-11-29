const { Character } = require("../../db");

exports.deleteCharacter= async (req,res)=>{
    const {id} = req.params;
    await Character.destroy({ 
            where: {
                id: id
            }
        });

    res.send("Personaje eliminado!")
}