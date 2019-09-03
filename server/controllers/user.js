const checkUser = require('./../database/queries/checkUser.js')

exports.get = (req, res) => {
  const { username, password } = req.body
  console.log('username', username, 'pass', password)

  checkUser(username)
    .then(data => {
      console.log('data', data)

      res.json({ data })
    })
    .catch(err => console.log(err))
}
