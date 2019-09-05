const dbConnection = require('./../db_connection')

const addMedicineInfo = (medicine, description, pharmacyID) => {
  return dbConnection
    .query('with inserted(id) as (insert into medicine(name, company, prescription, description) values ($1, $2, $3, $4) returning medicineID) insert into pharmacy_to_medicine (medicineID, pharmacyID, price) values ( (select id from inserted) ,$5 , $6)', [medicine.medName, medicine.medCompany, medicine.prescription, description, pharmacyID, medicine.medPrice])
    .then(res => res.rows[0])
    .catch(err => console.log(err))
}
module.exports = addMedicineInfo
