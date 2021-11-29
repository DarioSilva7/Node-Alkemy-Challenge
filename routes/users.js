const router = require('express').Router()
// const bcrypt = require('bcryptjs');
// const { User } = require('../db');
// const {check, validationResult} = require('express-validator');
const {postValidator, loginValidator} = require('../helpers/index')
const {register}  = require('../controllers/users/register');
const { login } = require('../controllers/users/login');

router.post('/register', postValidator , register)

router.post('/login', loginValidator , login)


module.exports= router;