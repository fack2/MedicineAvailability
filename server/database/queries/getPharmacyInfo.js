const dbConnection = require('./../db_connection')

const PharmInfo = pharmName => {
  return dbConnection
    .query('select * from pharmacy where pharmacyName = $1', [pharmName])
    .then(res => res.rows[0])
    .catch(err => console.log(err))
}

module.exports = PharmInfo
