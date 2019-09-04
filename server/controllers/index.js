const express = require('express')
const router = express.Router()
const search = require('./search')
const user = require('./user')
const { auth } = require('../middlewares/auth')
const { checkAuth } = require('./checkAuth')
const getPharmacyMed = require('./getPharmacyMed')

router.get('/api/medicine/:medname', search.get)
router.get(
  '/api/pharmacy/medicine/:medname',
  auth,
  getPharmacyMed.updatePharmacy
)
router.get('/check-auth', auth, checkAuth)
router.post('/api/login', user.get)

module.exports = router
