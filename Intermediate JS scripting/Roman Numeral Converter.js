
//METHOD 1

function convertToRoman(num) {
  var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
roman = '',
 i;
  for ( i in lookup ) {
    while ( num >= lookup[i] ) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

convertToRoman(36);


//METHOD 2


function convertToRoman(num) {
  // Create an empty string for the result  
  var result = [];
  // list all relevant numbers and numerals
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  // Loop through the numbers while the number is greater than the number, keep looping
  numbers.map((number, i) => { 
     while (num >= number) {
     // add numerals as you go eg. 55 --> loop numbers, find L, loop again, find V
       result += roman[i];
       num -= number;
     }
    });
  return result;
}

convertToRoman(52);