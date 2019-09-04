const dbConnection = require('./../db_connection')

const addMedicineInfo = medicine => {
  return dbConnection
    .query('insert into medicine (name, company, prescription ) values ($1, $2, $3)', [medicine.medName, medicine.medCompany, medicine.prescription])
    .then(res => res.rows[0])
    .catch(err => console.log(err))
}

module.exports = addMedicineInfo
