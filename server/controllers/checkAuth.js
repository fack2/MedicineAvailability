exports.checkAuth = (req, res) => {
  const { pharmacyName } = req

  res.json({ success: true, username: pharmacyName })
}
