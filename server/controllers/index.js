const express = require('express')
const router = express.Router()
const search = require('./search')
const user = require('./user')

router.get('/api/medicine/:medname', search.get)

router.post('/api/login', user.get)

module.exports = router
