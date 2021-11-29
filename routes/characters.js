const express = require('express')
const router = express.Router()
const { getCharacters } = require('../controllers/characters/getCharacters')
const { createCharacter } = require('../controllers/characters/createCharacter')
const { updateCharacter } = require('../controllers/characters/updateCharacter')
const { deleteCharacter } = require('../controllers/characters/deleteCharacter')
const { getCharacterDetail } = require('../controllers/characters/getCharacterDetail')

router.get('/', getCharacters)

router.get('/detail/:id', getCharacterDetail)

router.post('/create', createCharacter)

router.put('/edit/:id', updateCharacter)

router.delete('/delete/:id', deleteCharacter)

module.exports= router