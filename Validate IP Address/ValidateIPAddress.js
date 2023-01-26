function validateIP(ip) {
  
	const arrOfStringsIp = ip.split('.')
  if (arrOfStringsIp.length !== 4) return false
  
  
  for(let num of arrOfStringsIp) {
    if(num.length === 0) return false
    for (let j=0; j < num.length; j++) {
      if (num[j] === 'x') return false
    }
    const newNum = Number(num)   
    
    if(newNum > 255 || newNum < 0) {
      return false
    }
    
  }
  return true
}

