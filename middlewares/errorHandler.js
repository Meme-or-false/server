module.exports = (err, req, res, next) => {
  if (err) {
    res.status(err.status).json({ message: err.message });
  }
  else {
    next();
  }
}
