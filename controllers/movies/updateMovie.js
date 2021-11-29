const { Film } = require("../../db");

exports.updateMovie= async (req,res)=>{
    const {id} = req.params;
    await Film.update(req.body,
        { 
            where: {
                id: id
            }
        });

    res.send("Pelicula/Serie actualizada con exito!")
}