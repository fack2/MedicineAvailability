const axios = require('axios')
const addMedicineInfo = require('../database/queries/addMedicineInfo')

exports.addMedicine = (req, res) => {
  const { medName } = req.body
  if (req.body) {
    axios.get(`https://api.fda.gov/drug/label.json?search=${medName}`).then(res => {
      const description = res.data.results[0].description[0]
      const { pharmacyID } = req
      addMedicineInfo(req.body, description, pharmacyID)
    })
    return res.json({ message: 'true' })
  } else {
    return res.json({ message: 'false' })
  }
}
