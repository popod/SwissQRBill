const SwissQRBill = require("swissqrbill");

const data = {
  currency: "CHF",
  amount: 1199.95,
  creditor: {
    name: "Robert Schneider AG",
    address: "Rue du Lac 1268",
    zip: 2501,
    city: "Biel",
    account: "CH5800791123000889012",
    country: "CH"
  },
  debitor: {
    name: "Pia-Maria Rutschmann-Schnyder",
    address: "Grosse Marktgasse 28",
    zip: 9400,
    city: "Rorschach",
    country: "CH"
  }
};

const pdf = new SwissQRBill.PDF(data, "./output/normal-iban-no-reference.pdf");