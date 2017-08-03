
function dropElements(arr, func) {
  // Drop them elements.
while(!func(arr[0]))
  {
    arr.shift();
  }
  return arr;
} 

dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
