"use strict";

const matchRouter = require("express").Router();
const MatchController = require("../controllers/match");

matchRouter.post("/", MatchController.startMatch);
matchRouter.delete("/", MatchController.endMatch);
// PUT METHOD FOR UPDATING MATCH SCORE
matchRouter.put("/", MatchController.updateMatchScore);
// PATCH METHOD FOR UPATING USER'S HIGHEST SCORE
matchRouter.patch("/", MatchController.updateHighestScore);

module.exports = matchRouter;