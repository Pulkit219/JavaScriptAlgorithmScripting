function isPrimeNumber(num)
{
    for(var j=2 ;j<num;j++)
    {
     if(num%j ===0)
       {
         return false;
       }
     
    }
  return true;
}


function sumPrimes(num) {
  
  var array =[];
  
  for(var i=2 ;i<=num;i++)
    {
      if(isPrimeNumber(i))
        {
          array.push(i);
        }
    }
  return array.reduce((a,b)=>{
    return a+b;
  });
}



sumPrimes(10);
