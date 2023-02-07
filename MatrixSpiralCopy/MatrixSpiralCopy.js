// Matrix Spiral Copy
// Given a 2D array (matrix) inputMatrix of integers,
// create a function spiralCopy that copies inputMatrix’s 
// values into a 1D array in a spiral order, clockwise. 
// Your function then should return that array.
//  Analyze the time and space complexities of your solution.


// Example:
// input:  inputMatrix  = [ [1,    2,   3,  4,    5],
//                          [6,    7,   8,  9,   10],
//                          [11,  12,  13,  14,  15],
//                          [16,  17,  18,  19,  20] ]

// output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

 // Do four repetitive runs :
  // left to the right
  // one row down
  // top to the down
  // one col left
  // right to the left 
  // one row up
  // bottom to the top
  
  // repeat
  
  // stop when all sells are visited
  



function spiralCopy(inputMatrix) {
  
    let resArray = []
    let left = 0
    let right = inputMatrix[0].length-1
    let top = 0
    let bottom = inputMatrix.length-1
    let size = inputMatrix[0].length * inputMatrix.length
    
    while(resArray.length < size) {
      // left to the right
      for(let i=left; i<=right && resArray.length < size; i++) {
        resArray.push(inputMatrix[top][i])
      }
      
      //one row down
      top += 1
      
      // top to the down
      for(let i=top; i<=bottom && resArray.length < size; i++){
        resArray.push(inputMatrix[i][right])
      }
      // one col left
      right -= 1
      
  
      // right to the left 
      for (let i=right; i>=left && resArray.length < size; i--){
        resArray.push(inputMatrix[bottom][i])
      }
      // one row up
      bottom -= 1
      
      // bottom to the top
      for(let i=bottom; i>= top && resArray.length < size; i--) {
        resArray.push(inputMatrix[i][left])
      }
      
      left += 1
      
    }
    return resArray
  }
  
  
  
 
  
  