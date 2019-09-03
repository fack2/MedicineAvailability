const dbConnection = require('./../db_connection')

const getMedInfo = medicine => {
  return dbConnection
    .query(
      'select pharmacy.pharmacyName, pharmacy.phone, pharmacy.location,medicine.name as medicineName, medicine.medicineID,medicine.img, medicine.description,medicine.prescription, medicine.company,pharmacy_to_medicine.soldOut, pharmacy_to_medicine.price from pharmacy inner join pharmacy_to_medicine on pharmacy_to_medicine.pharmacyID = pharmacy.pharmacyID inner join medicine on pharmacy_to_medicine.medicineID = medicine.medicineID where medicine.medicineID = (select medicineID from medicine where name = $1)',
      [medicine]
    )
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getMedInfo
