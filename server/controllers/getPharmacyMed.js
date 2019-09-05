const updatePharmacyInfo = require("./../database/queries/updatePharmacyInfo")

exports.updatePharmacy = (req, res) => {
  console.log("endpoint", req.params.medname)
  const { pharmacyID } = req
  updatePharmacyInfo(pharmacyID, req.params.medname)
    .then(data => res.json(data))
    .catch(() => res.status(500).json({ err: "login Error" }))
}
