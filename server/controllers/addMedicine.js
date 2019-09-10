const axios = require('axios')
const addMedicineInfo = require('../database/queries/addMedicineInfo')

exports.addMedicine = (req, res) => {
  const { medName } = req.body

  if (req.body) {
    axios
      .get(`https://api.fda.gov/drug/label.json?search=${medName}`)
      .then(res => {
        const description = res.data.results[0].description[0]
        const { pharmacyID } = req
        addMedicineInfo(req.body, description, pharmacyID)
        console.log('hhhhh')

        return res.json({ message: 'true' })
      })
      .catch(err => res.json({ message: 'error' }))
    // return res.json({ message: 'error' })
  } else {
    return res.json({ message: 'false' })
  }
}
