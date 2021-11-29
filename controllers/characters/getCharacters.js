const {Character} = require('../../db')

exports.getCharacters = async (req, res) =>{
  const {name, age, movies }= req.query
  
  const characters = await Character.findAll({
      attributes: ['image', 'name']
    });

  if(name){
    let list= await Character.findAll({
      where:{ 
          name: {[Op.like]: `%${name}%`}
      }
    })
    res.json(list)
  }

  if(age){
    list = await Character.findAll({
      where:{
        age: {[op.like]: `%${age}%`}
      }
    })
  res.json(list)
  }

  if(movies){
    list = await Film.findAll({
      where:{
        id: movies
      },
      include:{
        model: Character,
        attributes: ["image", "name"],
        through:{
          attributes:[]
        }
      }
    })
    res.json(list)
  }
    res.json(characters)
} 