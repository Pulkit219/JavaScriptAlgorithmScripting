
//ELIMINATING DUPLICATE VALUES FROM 2 ARRAYS AND MAKE ONE ARRAY OF UNIQUE VALUES

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for(var i=0; i<arr1.length; i++)
      {
    if(arr2.indexOf(arr1[i]) === -1)
    {
    	newArr.push(arr1[i]);
    }
         
  }

   for(var j=0; j<arr2.length; j++)
      {
        
        if(arr1.indexOf(arr2[j]) === -1)
    
        newArr.push(arr2[j]);
  }
  
  return newArr;
    }
    	


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);




// METHOD 2

function diffArray(arr1, arr2) { 
  var newArr = arr1.concat(arr2); 

  return newArr.filter((num) => {
    return (arr1.indexOf(num) === -1 || arr2.indexOf(num) === -1) 
  }); 
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



//METHOD 3 

function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);