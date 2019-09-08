const dbConnection = require('../db_connection')

const updateFormQuery = medicine => {
  return dbConnection
    .query(
      ' update medicine set prescription=$1,company=$2 where medicineID = $3',
      [medicine.prescription, medicine.company, medicine.medicineid]
    )
    .then(res => res.rows[0])
    .catch(err => console.log(err))
}
const updateFormQuery2 = (medicine, pharmacyID) => {
  return dbConnection
    .query(
      ' update pharmacy_to_medicine set price=$1, soldOut=$2 where medicineID= $3 and pharmacyID =$4',
      [medicine.price, medicine.soldOut, medicine.medicineid, pharmacyID]
    )
    .then(res => res.rows[0])
    .catch(err => console.log(err))
}
module.exports = { updateFormQuery, updateFormQuery2 }
