const dbConnection = require('./../db_connection')

const addtopharmacy = ({ medicineId, medPrice, pharmacyID }) => {
  return dbConnection
    .query(
      'insert to pharmacy_to_medicine(medicineid,price) values ($1,$2) where pharmacyID =$3',
      [medicineId, medPrice, pharmacyID]
    )
    .then(res => res.rows[0])
    .catch(err => err)
}

module.exports = addtopharmacy
