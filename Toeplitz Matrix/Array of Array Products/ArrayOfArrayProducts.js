function arrayOfArrayProducts(arr) {
  let prevNumCollector = 1;
  let total = 1;
  let arrOfResults = [];

  if (arr.length === 0 || arr.length === 1) return [];

  for (let i = 0; i < arr.length; i++) {
    total = 1;
    for (let j = i + 1; j < arr.length; j++) {
      total *= arr[j]; // 84, 12, 4 -> exit
    }
    total *= prevNumCollector; //1 * 84, 2 * 12, 14 * 4, 1 * 42
    arrOfResults.push(total); //   84,     24,     56,    42

    prevNumCollector *= arr[i]; // 2 -> 14 -> 42
  }
  return arrOfResults;
}

const arr = [2, 7, 3, 4];

console.log(arrayOfArrayProducts(arr)); // [ 84, 24, 56, 42 ]
