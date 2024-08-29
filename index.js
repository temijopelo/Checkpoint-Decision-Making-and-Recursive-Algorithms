// Ticket pricing

let age = 20;
let moviePrice;

switch (true) {
  case age <= 12:
    moviePrice = "$10";
    console.log(`Ticket price is ${moviePrice}`);
    break;
  case age >= 13 && age <= 17:
    moviePrice = "$15";
    console.log(`Ticket price is ${moviePrice}`);
    break;
  case age >= 18:
    moviePrice = "$20";
    console.log(`Ticket price is ${moviePrice}`);
    break;
}

//Weather Clothing Adviser

let temperature = 50;
let isRaining;

if (temperature <= 50) {
  isRaining = true;
  console.log(`it is going to rain take an umberalla and some rainy boots`);
} else {
  isRaining = false;
  console.log(`It is going to be sunny, wear some sunscreens and shades`);
}

// Fibonacci sequency

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(6));

// Palindrome Checker

function palindrome(str) {
  return str === str.split(" ").reverse().join(" ");
}

console.log(palindrome("A born is a born"));
