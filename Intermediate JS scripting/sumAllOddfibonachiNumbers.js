function sumFibs(num) 
{ 
	var newNum = 0; 
	var prevNum = 1; var sum = 0; 
	for (var i = 1; i <= num; i = newNum)
	 {
	  newNum += prevNum; prevNum = i; 
	 	if (prevNum % 2 !== 0)
	 	 { sum += prevNum; }

	 	  }


	 	return sum; }