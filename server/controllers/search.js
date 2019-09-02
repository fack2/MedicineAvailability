const getMedInfo = require('./../database/queries/getMedInfo.js')

exports.get = (req, res) => {
  getMedInfo(req.params.medname)
    .then(data => res.json({ data }))
    .catch(err => console.log(err))
}
