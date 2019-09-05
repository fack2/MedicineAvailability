exports.checkAuth = (req, res) => {
  const { pharmacyID } = req
  res.json({ success: 'true' })
}
