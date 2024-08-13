const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

const Plaster = sequelize.define("Plaster", {
  // Existing fields
  plasterName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coverageKGperMMperMetre: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  bagWeight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  plasterType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  technicalDatasheetPDF: {
    type: DataTypes.STRING,
    allowNull: true, // Can store a URL string
  },
  productDataSheetPDF: {
    type: DataTypes.STRING,
    allowNull: true, // Can store a URL string
  },
  productSafetySheetPDF: {
    type: DataTypes.STRING,
    allowNull: true, // Can store a URL string
  },
  productImage: {
    type: DataTypes.STRING,
    allowNull: true, // Can store a URL string
  },
});

module.exports = Plaster;
