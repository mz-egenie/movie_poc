const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  return res.json({ status: "success", message: "Working!" });
});

module.exports = router;
