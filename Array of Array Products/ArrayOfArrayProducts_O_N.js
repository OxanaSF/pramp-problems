// Array of Array Products
// Given an array of integers arr, you’re asked to calculate
// for each index i the product of all integers except
// the integer at that index (i.e. except arr[i]).
// Implement a function arrayOfArrayProducts that takes
// an array of integers and returns an array of the products.

// Solve without using division and analyze your solution’s
// time and space complexities.

/*
  Time complexity: O(N)
  Space complexity: O(N)
*/

function arrayOfArrayProducts(arr) {
  let arrOfResults = [];
  let preNum = 1;
  let afterNum = 1;

  if(arr.length === 0 || arr.length === 1) return []

  for (let i = 0; i < arr.length; i++) {
    arrOfResults.push(preNum);
    preNum *= arr[i];
  }
  // -> pre nums: [ 1, 2, 14, 42 ]

  for (let i = arr.length - 1; i >= 0; i--) {
    arrOfResults[i] = arrOfResults[i] * afterNum;
    afterNum *= arr[i];
  }

  return arrOfResults;
}

const arr = [2, 7, 3, 4];

console.log(arrayOfArrayProducts(arr)); // [ 84, 24, 56, 42 ]
