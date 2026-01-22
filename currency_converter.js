const input = require("sync-input");

const exchangeRates = {
  USD: 1.0,
  EUR: 0.89,
  JPY: 113.5,
  RUB: 74.36,
  GBP: 0.75,
  AUD: 1.52,
  RWF: 1320.00
};

function showcurrencies() {
  console.log("Available currencies:");
  for (const currency in exchangeRates) {
    console.log(`${currency} : ${exchangeRates[currency]}`);
  }
}

function convertcurrency() {
  showcurrencies();

  const currency = input("What currency do you want to covert from? ").toUpperCase();
  const targetCurrency = input("What currency do you want to convert to? ").toUpperCase();
  const amount = parseFloat(input("Enter amount you want to convert? "));

  if (!exchangeRates[currency] || !exchangeRates[targetCurrency]) {
    console.log("Unknown currency");
    return;
  }

  if (isNaN(amount)){
    console.log("Invalid amount");
    return;   
  }
  const converted = (amount / exchangeRates[currency]) * exchangeRates[targetCurrency];
  console.log(`${amount} ${currency} is ${converted.toFixed(2)} ${targetCurrency}`);
}

  console.log("Welcome to the Currency Converter!");
  console.log("what do you want to do? ");
  console.log("1. convert currencies");
  console.log("2. Exit program");

  const choice = input("choose an option (1 or 2): ");

  if (choice === "1"){
  convertcurrency();
  process.exit();
  } else if (choice === "2"){
  console.log("Have a nice day!");
  process.exit();
  } else {
  console.log("Invalid option!!");
  }




