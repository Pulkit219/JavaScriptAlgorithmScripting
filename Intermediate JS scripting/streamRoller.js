
//METHOD 1
function steamrollArray(arr) {
  // I'm a steamroller, baby
   return arr.reduce((acc,el)=>{
  	if(Array.isArray(el))
  	{
       return steamrollArray(acc.concat(el));
  	}
  	else
  	{
       return acc.concat(el);
  	}
  },[]);
 
}

steamrollArray([1, [2], [3, [[4]]]]);

//METHOD 2

function steamrollArray(arr) {
  // I'm a steamroller, baby
   return arr.reduce((acc,el)=>{
     return acc.concat(Array.isArray(el)? steamrollArray(el): el);
  },[]);
 
}

steamrollArray([1, [2], [3, [[4]]]]);


//METHOD 3

function steamrollArray(arr) {
  for(var i =0;i< arr.length;i++)
  {
  	if(!Array.isArray(arr[i]))
  	{
  		arr.concat(arr[i]);
  	}
  	else
  	{
  		steamrollArray(arr[i])
  	}
  }
 return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);