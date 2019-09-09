exports.get = (req, res) => {
  res.clearCookie('token')
  res.end()
}
