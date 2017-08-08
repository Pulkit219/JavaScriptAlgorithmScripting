function diffArray(arr1, arr2) {
  var uniqVal = [];
  // Same, same; but different.
  for(var i=0; i<arr1.length; i++)
      {
    if(arr2.indexOf(arr1[i]) <0 && uniqVal.indexOf(arr1[i]) <0)
    {
      uniqVal.push(arr1[i]);
    }
    
         
  }

   for(var j=0; j<arr2.length; j++)
      {
        
        if(arr1.indexOf(arr2[j]) <0 && uniqVal.indexOf(arr2[j]) <0)
    
        {uniqVal.push(arr2[j]);}
  }
  
  return uniqVal;
    }
function sym(args) {
//   return [].slice.call(arguments).reduce(diffArray);
   
  return Array.prototype.slice.call(arguments).reduce(diffArray);
  

}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);