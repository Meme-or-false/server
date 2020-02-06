module.exports = (err, res, res, next) => {
  // tambahin sendiri errornya
  console.log(err)
  err.status(500).json(err)
}
