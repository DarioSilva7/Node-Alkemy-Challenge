const express = require('express')
const router = express.Router()
const charactersRouter = require('./characters')
const moviesRouter = require('./movies')
const userRouter = require('./users')
const verifyToken = require('../helpers/validateToken')

router.use('/auth', userRouter)
router.use('/characters', verifyToken , charactersRouter)
router.use('/movies', verifyToken , moviesRouter)

module.exports= router;