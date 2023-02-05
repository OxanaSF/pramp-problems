// Array of Array Products
// Given an array of integers arr, you’re asked to calculate 
// for each index i the product of all integers except 
// the integer at that index (i.e. except arr[i]). 
// Implement a function arrayOfArrayProducts that takes 
// an array of integers and returns an array of the products.

// Solve without using division and analyze your solution’s 
// time and space complexities.


/*
  Time complexity: O(N^2)
  Space complexity: O(N)
*/

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
