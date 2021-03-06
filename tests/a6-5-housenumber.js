const SwissQRBill = require("../");

const data = {
  currency: "CHF",
  amount: 1199.95,
  reference: "210000000003139471430009017",
  creditor: {
    name: "Robert Schneider AG",
    address: "Rue du Lac",
    houseNumber: 1268,
    zip: 2501,
    city: "Biel",
    account: "CH4431999123000889012",
    country: "CH"
  },
  debitor: {
    name: "Pia-Maria Rutschmann-Schnyder",
    address: "Grosse Marktgasse",
    houseNumber: 28,
    zip: 9400,
    city: "Rorschach",
    country: "CH"
  }
};


const pdf = new SwissQRBill.PDF(data, "./output/a6-5-housenumber.pdf");