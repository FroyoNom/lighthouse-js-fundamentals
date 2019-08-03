//example 1
const temperature = 16;
const raining = false;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//example 2
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are elegible to vote.");
}

//example 3
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");
}

//example 4
if (!raining) {
  console.log("Leave your umbrella at home!");
}
