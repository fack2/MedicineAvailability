const addMedicineInfo = require('../database/queries/addMedicineInfo')

exports.addMedicine = (req, res) => {
  addMedicineInfo(req.body)
  const { pharmacyID } = req
  if (req.body) {
    return res.json({ message: 'true' })
  } else {
    return res.json({ message: 'false' })
  }
}
