const cookie = require('cookie')
const { verify } = require('jsonwebtoken')
const SECRET = process.env.SECRET

exports.auth = (req, res, next) => {
  if (req.headers.cookie) {
    const { token } = cookie.parse(req.headers.cookie)
    verify(token, SECRET, (err, result) => {
      if (err) {
        return res.json({ error: 'server error' })
      }
      if (result) {
        req.pharmacyID = result.pharmacyID
        return next()
      } else {
        return res.json({ error: 'not Authorized' })
      }
    })
  }
}
