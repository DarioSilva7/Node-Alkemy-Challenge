const { Character } = require("../../db");

exports.updateCharacter= async (req,res)=>{
    const {id} = req.params;
    await Character.update(req.body,
        { 
            where: {
                id: id
            }
        });

    res.send("Personaje actualizado con exito!")
}