const {
  updateFormQuery,
  updateFormQuery2
} = require('../database/queries/updateMedTable')

exports.updateMedForm = (req, res) => {
  console.log('pa', req.body)
  const { pharmacyID } = req
  // console.log('ph', pharmacyID)

  if (req.body) {
    updateFormQuery(req.body)
    updateFormQuery2(req.body, pharmacyID)
  } else {
    return res.json({ message: 'false' })
  }
}
