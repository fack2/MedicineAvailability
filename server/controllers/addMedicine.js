const addMedicineInfo = require('../database/queries/addMedicineInfo')

exports.addMedicine = (req, res) => {
  console.log('lllll', req.body.medicine)
  console.log('lllkjhjgjull', req.body)

  // addMedicineInfo(req.body.medicine)
  // console.log(req.pharmacyID)
  // const { pharmacyID } = req
  // res.json({ true: 'jhjjjjj' })
}
