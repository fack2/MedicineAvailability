const express = require('express')
const router = express.Router()
const search = require('./search')
const login = require('./login')
const { addMedicine } = require('./addMedicine')
const { auth } = require('../middlewares/auth')
const { checkAuth } = require('./checkAuth')

router.get('/api/medicine/:medname', search.get)
router.get('/check-auth', auth, checkAuth)
router.post('/api/login', login.get)
router.post('/api/pharmacy/medicine', auth, addMedicine)

module.exports = router
