const express = require('express')
const router = express.Router()
const search = require('./search')

router.get('/api/medicine/:medname', search.get)

module.exports = router
