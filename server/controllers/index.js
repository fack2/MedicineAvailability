const express = require('express')
const router = express.Router()
const search = require('./search')
const user = require('./user')

router.get('/api/medicine/:medname', search.get)
console.log('in router')

router.get('/api/login', user.get)

module.exports = router
