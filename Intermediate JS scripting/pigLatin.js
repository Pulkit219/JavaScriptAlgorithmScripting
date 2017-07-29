
function translatePigLatin(str) {
  
  var letters = str.split('');
  var vowel = /[aeiou]/gi;
  if(vowel.test(letters[0]))
    {
      return letters.join('') + 'way';
    }
  while(true)
    {
      
      if(!vowel.test(letters[0]))
        {
          letters.push(letters.splice(0,1));
        }
      else
        {
          break;
        }
      
    }
  return letters.join('') +"ay";
}

translatePigLatin("glove");
