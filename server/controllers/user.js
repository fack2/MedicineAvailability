const checkUser = require('./../database/queries/checkUser.js')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

exports.get = (req, res) => {
  const { username, password } = req.body

  checkUser(username)
    .then(data => {
      bcrypt.compare(password, data.password, (err, result) => {
        if (err) {
          return res.json({ err })
        }
        if (result) {
          const token = jwt.sign(password, process.env.SECRET)
          return res
            .cookie('token', token, { maxAge: 100000 })
            .json({ msg: 'true', token })
        } else {
          return res.json({ msg: 'false' })
        }
      })
    })
    .catch(err => res.json({ err }))
}
