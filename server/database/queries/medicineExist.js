const dbConnection = require('./../db_connection')

const medicineExist = medName => {
  return dbConnection
    .query('select * from medicine where name =$1', [medName])
    .then(res => res.rows[0])
    .catch(err => err)
}

module.exports = medicineExist
