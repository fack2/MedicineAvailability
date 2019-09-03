const express = require('express')
const router = express.Router()
const search = require('./search')
const { auth } = require('../middlewares/auth')
const checkAuth = require('./checkAuth')

router.get('/api/medicine/:medname', search.get)
router.get('/check-auth', auth, checkAuth)

module.exports = router
