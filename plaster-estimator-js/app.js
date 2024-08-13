var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// const bodyParser = require("body-parser");
const multer = require("multer"); // Add multer

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

const selectPlaster = {
  plasterName: "Multi-finish",
  coverageKGperMMperMetre: 2,
  bagWeight: 25,
  plasterType: "internal",
};
// Plaster calculation functions
function calculateArea(length, width) {
  return length * width;
}
function calculatePlasterNeeded(totalArea, thickness, coverageKGperMMperMetre) {
  return totalArea * (coverageKGperMMperMetre * thickness);
}
function calculateContingencyNeeded(plasterNeeded, contingencyPercentage) {
  return plasterNeeded * (contingencyPercentage / 100);
}
// Configure multer
const upload = multer(); // For handling multipart/form-data
// view engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json()); // Middleware to parse JSON data
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.post("/submit", upload.none(), (req, res) => {
  console.log("Received request body inside app.Js:", req.body);

  const length = parseFloat(req.body.lengthInput) || 0;
  const width = parseFloat(req.body.widthInput) || 0;
  const thickness = parseFloat(req.body.thicknessInput) || 0;
  const contingencyPercentage = parseFloat(req.body.contingencyInput) || 0;

  // Perform calculations
  const totalArea = calculateArea(length, width);
  const plasterNeeded = calculatePlasterNeeded(
    totalArea,
    thickness,
    selectPlaster.coverageKGperMMperMetre
  );

  const contingency = calculateContingencyNeeded(
    plasterNeeded,
    contingencyPercentage
  );
  const totalPlasterNeeded = plasterNeeded + contingency;
  const bagsRequired = Math.ceil(totalPlasterNeeded / 25); // Assuming 25kg per bag
  console.log(`inside app.js ${totalArea}, ${plasterNeeded}`);
  console.log(
    `Total Area: ${totalArea}, Plaster Needed: ${plasterNeeded}, Contingency: ${contingency}, Total Plaster Needed: ${totalPlasterNeeded}, Bags Required: ${bagsRequired}`
  );

  // Send the calculated results back as a JSON object
  res.json({
    totalArea: totalArea.toFixed(2),
    plasterNeeded: plasterNeeded.toFixed(2),
    contingencyNeeded: contingency.toFixed(2),
    totalPlasterNeeded: totalPlasterNeeded.toFixed(2),
    bagsRequired: bagsRequired,
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

module.exports = app;
