const {
  updateFormQuery,
  updateFormQuery2
} = require('../database/queries/updateMedTable')

exports.updateMedForm = (req, res) => {
  const { pharmacyID } = req
  const { medicineid } = req.params

  updateFormQuery(req.body, medicineid)
    .then(() =>
      updateFormQuery2(req.body, pharmacyID, medicineid)
        .then(() => res.status(200).json({ updated: true }))
        .catch(err => res.status(500).json({ err, updated: false }))
    )
    .catch(err => res.status(500).json({ err, updated: false }))
}
