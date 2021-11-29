const jwt = require('jsonwebtoken')

module.exports = verifyToken= ( req, res, next)=>{
    const token = req.header('auth-token')
    if(!token) res.status(401).json({error: true, message:"Acceso denegado"})

    try{
        const verify= jwt.verify(token, process.env.TOKEN_SECRET)
        req.user= verify
        next()
    }
    catch(err){
        res.status(400).json({error: true, message: "Token invalido"})
    }
}