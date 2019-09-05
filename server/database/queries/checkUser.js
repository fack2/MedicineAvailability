const dbConnection = require('./../db_connection')

const checkUser = email => {

  return dbConnection
    .query('select password, pharmacyID from pharmacy where email = $1', [email])
    .then(res => res.rows[0])
    .catch(err => console.log(err))
}

module.exports = checkUser
