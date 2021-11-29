const {Film} = require('../../db')

exports.getMovies = async (req, res) =>{
  const {title, genre, order }= req.query
  
  const films = await Film.findAll({
      attributes: ['image', 'title', 'releaseDate']
    });

  if(title){
    let list= await Film.findAll({
      where:{ 
          title: {[Op.like]: `%${title}%`}
      }
    })
    res.json(list)
  }

  if(genre){
    list = await Character.findAll({
      where:{
        genre: {[op.like]: `%${genre}%`}
      }
    })
  res.json(list)
  }

  if(order){
      switch (order) {
          case 'ASC':

            res.json(list)

          case 'DESC':
            res.json(list)

          default:
              break;
      }
    }
    res.json(films)
} 