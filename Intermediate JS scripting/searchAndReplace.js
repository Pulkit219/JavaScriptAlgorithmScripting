
function myReplace(str, before, after) {
  
  if(before.charAt(0) === before.charAt(0).toUpperCase())
    {
      str = str.replace(before, after.charAt(0).toUpperCase() + after.slice(1));
    }
  else
    {
        
  str = str.replace(before, after);
    }

  
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");