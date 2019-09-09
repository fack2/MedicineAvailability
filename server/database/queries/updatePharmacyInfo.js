const dbConnection = require('./../db_connection')

const getPharmacyInfo = (pharmacyID, name) => {
  return dbConnection
    .query(
      'select medicine.medicineID, medicine.name, pharmacy_to_medicine.price,medicine.company, medicine.description ,pharmacy_to_medicine.soldOut,medicine.prescription,medicine.img from medicine inner join pharmacy_to_medicine on medicine.medicineID = pharmacy_to_medicine.medicineID inner join pharmacy on pharmacy.pharmacyID = pharmacy_to_medicine.pharmacyID where medicine.name = $1 and pharmacy.pharmacyID =$2',
      [name, pharmacyID]
    )
    .then(res => res.rows[0])
    .catch(err => console.log(err))
}

module.exports = getPharmacyInfo
