

//1ST METHOD
function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
  var result =[];

   args.reduce((a,b)=>
                    {
    return a.concat(b);
  }).forEach((item)=>{
  	if(result.indexOf(item) < 0)
  	{
  		result.push(item);
  	}
  });
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


//2ND METHOD

function uniteUnique(arr) {
  var args = Array.prototype.slice.call(arguments);
 
   return args.reduce((arr1,arr2)=>
                    {
    return arr1.concat(arr2.filter(item=>{
    	return arr1.indexOf(item) < 0;
    }));
  });

}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
