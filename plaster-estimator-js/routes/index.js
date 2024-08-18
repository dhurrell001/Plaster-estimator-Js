var express = require("express");
var router = express.Router();

const Plaster = require("../models/Plaster"); // Ensure correct path to your model

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const plasters = await Plaster.findAll({
      attributes: ["id", "plasterName"], // Only fetch the necessary fields
    });

    res.render("index", {
      title: "MinMax Plaster Estimator",
      plasters: plasters,
    });
  } catch (error) {
    console.error("Error fetching plasters:", error);
    res.render("index", { title: "MinMax Plaster Estimator", plasters: [] });
  }
});

module.exports = router;

module.exports = router;
