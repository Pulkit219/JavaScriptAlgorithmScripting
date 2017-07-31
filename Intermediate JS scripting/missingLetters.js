
function fearNotLetter(str) {
  var numbers = str.split('').map((el)=>
                                 {
   return el.charCodeAt();
  });
  for(var i =0;i<numbers.length;i++)
  {
 
    if((numbers[i+1] - numbers[i]) >1)
      {
        
        return String.fromCharCode((numbers[i] +1));
      }
  };
  return undefined;
  
}

fearNotLetter("bcd");