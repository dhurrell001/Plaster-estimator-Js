const Plaster = require("./Plaster");

async function seedDatabase() {
  try {
    await Plaster.bulkCreate([
      {
        plasterName: "Multi-finish",
        coverageKGperMMperMetre: 2,
        bagWeight: 25,
        plasterType: "internal",
      },
      {
        plasterName: "Bonding Coat",
        coverageKGperMMperMetre: 1.8,
        bagWeight: 20,
        plasterType: "internal",
      },
      {
        plasterName: "Hardwall",
        coverageKGperMMperMetre: 1.5,
        bagWeight: 30,
        plasterType: "internal",
      },
      {
        plasterName: "Thistle",
        coverageKGperMMperMetre: 2.2,
        bagWeight: 25,
        plasterType: "external",
      },
    ]);

    console.log("Dummy data has been added to the database!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

module.exports = seedDatabase;
