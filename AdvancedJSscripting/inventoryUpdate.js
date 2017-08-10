
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    for(var i=0;i<arr2.length;i++)
      {
        var invNotExists = arr1.every(el=>{
          return arr2[i][1] !== el[1];
      
        });
        
        if(invNotExists)
          {
            arr1.push(arr2[i]);
            
          }
        else
          {
            var indexVal = arr1.findIndex(el=>{
              return el[1] === arr2[i][1];
            });
            arr1[indexVal][0]+=arr2[i][0];
          }
      }
      // SORTING IN ALPHABATICAL ORDER
  return arr1.sort((a,b)=>{
    return a[1] < b[1]? -1: 1; 
  });
}