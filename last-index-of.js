function lastIndexOf(array, value) {
  let lastIndex;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) lastIndex = i;
  }

  if (lastIndex === undefined) lastIndex = -1;
  return lastIndex;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
