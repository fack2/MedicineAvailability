const dbConnection = require('./../db_connection')

const checkUser = user => {
  dbConnection
    .query('select pharmacyName from pharmacy where pharmacyName = $1', [user])
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = checkUser
