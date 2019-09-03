const express = require('express')
const router = express.Router()
const search = require('./search')
const user = require('./user')
const { auth } = require('../middlewares/auth')
const { checkAuth } = require('./checkAuth')

router.get('/api/medicine/:medname', search.get)
router.get('/check-auth', auth, checkAuth)
router.post('/api/login', user.get)

module.exports = router
