// /services/plasterCalculations.js

function calculateArea(length, width) {
  return length * width;
}

function calculatePlasterNeeded(totalArea, thickness, coverageKGperMMperMetre) {
  return totalArea * (coverageKGperMMperMetre * thickness);
}

function calculateContingencyNeeded(plasterNeeded, contingencyPercentage) {
  return plasterNeeded * (contingencyPercentage / 100);
}

function calculateBagsNeeded(plasterNeeded, bagSize) {
  return Math.ceil(plasterNeeded / bagSize);
}

module.exports = {
  calculateArea,
  calculatePlasterNeeded,
  calculateContingencyNeeded,
  calculateBagsNeeded,
};
