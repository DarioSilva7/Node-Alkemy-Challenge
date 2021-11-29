const {User} = require('../db')
// console.log(User,"<=")
exports.postValidator= async (req, res, next)=>{

    req.check('username', 'El nombre de usuario es obligatorio').not().isEmpty().isLength({
        min: 4,
        max: 12
    }),
    req.check('password', 'El password es obligatorio, debe tener entre 6 y 15 caracteres').not().isEmpty().isLength({
        min: 6,
        max: 15
    }),
    req.check('email', 'El email es incorrecto o no fue completado').isEmail()
    
    const errors = req.validationErrors()

    const existingEmail = await User.findOne({
        where: { email: req.body.email }
    })

    if(existingEmail) res.status(400).json({error: true, message: "El email ya se encuentra registrado"})

    if(errors){
        const firstError = errors.map(e=> e.msg)[0]
        return res.status(400).json({error: firstError})
    }

    next()
}

exports.loginValidator= async (req, res, next)=>{
    req.check('email', 'El email es incorrecto o no fue completado').not().isEmpty().isEmail(),
    req.check('password', 'El password es obligatorio, debe tener entre 6 y 15 caracteres').not().isEmpty().isLength({
        min: 6,
        max: 15
    })

    const errors = req.validationErrors()
    if(errors){
        const firstError = errors.map(e=> e.msg)[0]
        return res.status(400).json({error: firstError}) 
    }
    next()
}