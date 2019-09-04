const dbConnection = require('./../db_connection')

const addMedicineInfo = medicine => {
  return dbConnection
    .query('insert into medicine (name, price, compony, prescription ) values ($1, $2, $3, $4)', [medicine.name, medicine.price, medicine.compony, medicine.prescription])
    .then(res => res.rows[0])
    .catch(err => console.log(err))
}

module.exports = addMedicineInfo
