function findBusiestPeriod(data) {
    let totalPeople = 0
    let maxPeople = 0
    let targetStamp = null
    
    for (let i = 0; i < data.length; i++) {
  
      if (data[i][2] === 1) {
        totalPeople += data[i][1] 
      } else {
        if(data[i][2] === 0) totalPeople -= data[i][1]
      }   

      
      if (data[i+1] && data[i][0] === data[i+1][0]) continue
      
      if (totalPeople > maxPeople) {
        maxPeople = totalPeople
        targetStamp = data[i][0]     
      }
    }
    return targetStamp
  }
  