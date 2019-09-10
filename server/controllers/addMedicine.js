const axios = require('axios')
const addMedicineInfo = require('../database/queries/addMedicineInfo')
const medicineExist = require('../database/queries/medicineExist')
const addtopharmacy = require('../database/queries/addtopharmacy')

exports.addMedicine = (req, res) => {
  const { medName } = req.body
  const { pharmacyID } = req

  medicineExist(medName)
    .then(result => {
      if (!result) {
        axios
          .get(`https://api.fda.gov/drug/label.json?search=${medName}`)
          .then(res1 => {
            const description = res1.data.results[0].description[0]

            addMedicineInfo(req.body, description, pharmacyID)
              .then(() => res.json({ add: true, message: 'done' }))
              .catch(err =>
                res.json({ add: false, err, message: 'wrong with add to db' })
              )
          })
          .catch(err =>
            res.json({
              add: false,
              err,
              message: 'api doesn`t contain medicine'
            })
          )
      } else {
        addtopharmacy(result.medicineid, req.body.medPrice, pharmacyID)
          .then(() => {
            return res.json({
              add: true,
              message: 'medicine exist already in db'
            })
          })
          .catch(err =>
            res.json({
              add: true,
              err,
              message: 'medicine exist already in db'
            })
          )
      }
    })
    .catch(err =>
      res.json({ add: true, err, message: 'wrong with find medicine in db' })
    )
}
