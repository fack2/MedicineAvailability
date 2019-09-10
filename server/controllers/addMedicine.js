const axios = require('axios')
const addMedicineInfo = require('../database/queries/addMedicineInfo')
const medicineExist = require('../database/queries/medicineExist')

exports.addMedicine = (req, res) => {
  const { medName } = req.body

  medicineExist(medName)
    .then(result => {
      if (!result) {
        axios
          .get(`https://api.fda.gov/drug/label.json?search=${medName}`)
          .then(res1 => {
            const description = res1.data.results[0].description[0]
            const { pharmacyID } = req

            addMedicineInfo(req.body, description, pharmacyID)
              .then(() => res.json({ add: true, message: 'done' }))
              // add to database error
              .catch(err =>
                res.json({ add: false, err, message: 'wrong with add to db' })
              )
          })
          // api error
          .catch(err =>
            res.json({
              add: false,
              err,
              message: 'api doesn`t contain medicine'
            })
          )
      } else {
        return res.json({ add: true, message: 'medicine exist already in db' })
      }
    })
    // find medicine in database error
    .catch(err =>
      res.json({ add: true, err, message: 'wrong with find medicine in db' })
    )
}
