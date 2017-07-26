
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);


// USING REDUCE FUNCTION

var summ;
function sumAll(arr) {
 summ = arr.reduce(function(sum,item,index)
            {
  
    return sum+item;
    
  },0);
return summ;
}

sumAll([1, 10,3242,42342]);