const express = require('express')
const router = express.Router()
const { testeFunc } = require('../controllers/teste')

router.post('/teste', testeFunc)

module.exports = router