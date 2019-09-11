const dbConnection = require('./../db_connection')

const addtopharmacy = (medicineId, medPrice, pharmacyID) => {
  return dbConnection
    .query(
      'insert into pharmacy_to_medicine (medicineID,price,pharmacyID) values ($1,$2,$3)',
      [medicineId, medPrice, pharmacyID]
    )
    .then(res => 'inserted')
    .catch(err => err)
}

module.exports = addtopharmacy
