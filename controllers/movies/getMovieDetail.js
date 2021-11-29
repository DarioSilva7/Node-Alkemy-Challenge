const {Character, Film} = require('../../db')

exports.getMovieDetail = async (req, res) =>{
    try{
    const theFilm = await Film.findByPk(
        req.params.id,{
            include: [Character]
        })
    res.json(theFilm)}
    catch(err){
        res.send(err)
    }
} 