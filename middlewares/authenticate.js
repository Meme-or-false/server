"use strict";

const jwt = require("jsonwebtoken");
const createError = require("http-errors");

module.exports = (req, res, next) => {
  try {
    const user = jwt.verify(req.body.token, process.env.JWT_SECRET_KEY);
    if (!user) {
      throw createError(401, "INVALID TOKEN!");
    }
    else {
      req.user = user;
      next();
    }
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};