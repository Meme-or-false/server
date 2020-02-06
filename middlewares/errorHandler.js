module.exports = (err, req, res, next) => {
  // tambahin sendiri errornya
  console.log(err)
  res.status(500).json(err)
}
