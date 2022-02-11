const express = require("express");
const router = express.Router();
const tokens = require("../Models/tokens");
router.get("/getToken/:type", (req, res) => {
  let type = req.params.type;

  tokens.findOne({ type: type }, (err, token) => {
    if (err) {
      res.send(err);
    } else {
      res.send(token);
    }
  });
});

module.exports = router;
