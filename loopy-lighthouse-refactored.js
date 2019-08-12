function loopyLighthouse(range, multiples, words) {
  var currentNum = range[0] - 1;
  var finalNum = range[1];

  while (currentNum < finalNum) {
    currentNum += 1;
    if (currentNum % multiples[0] === 0 && currentNum % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (currentNum % multiples[0] === 0) {
      console.log(words[0]);
    } else if (currentNum % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(currentNum);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
