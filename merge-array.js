function merge(arr1, arr2) {
  // Concatenate arrays unsorted
  let array = arr1.concat(arr2);
  // Loop through arrays sorting from lowest to tallest
  return array.sort();
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
