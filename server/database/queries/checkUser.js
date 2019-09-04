const dbConnection = require('./../db_connection')

const checkUser = username => {
  return dbConnection
    .query('select password from pharmacy where pharmacyName = $1', [username])
    .then(res => res.rows[0])
    .catch(err => console.log(err))
}

module.exports = checkUser
