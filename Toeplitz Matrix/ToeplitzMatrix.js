function isToeplitz(arr) {
	/**
	@param arr: integer[][]
	@return: boolean
	*/

	// your code goes here
  
  
  for (let i=0; i< arr.length; i++) {
    
  for (let j=0; j < arr.length; j++) {
    const num1 = arr[i][j]
    let num2
    if(arr[i+1]) {
      num2 = arr[i+1][j+1]
    } 
    if (num2 && num1 !== num2) return false
  }
}
  return true
}

