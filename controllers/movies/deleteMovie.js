const { Film } = require("../../db");

exports.deleteMovie= async (req,res)=>{
    const {id} = req.params;
    await Film.destroy({ 
            where: {
                id: id
            }
        });

    res.send("Pelicula/Serie eliminada!")
}