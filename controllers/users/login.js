const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../db');

exports.login= async (req, res)=>{

    const user = await User.findOne({
        where:{
            email: req.body.email
        } 
    })
    if(!user) res.status(400).json({error: true, message: "Usuario no registrado."})
    
    const passOk = await bcrypt.compare(req.body.password, user.password)
    if(!passOk) res.status(400).json({error: true, message: "Error en la carga de datos."})

    const token = jwt.sign({
        name: user.name,
        id: user.id
        },
        process.env.TOKEN_SECRET)

    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
}
