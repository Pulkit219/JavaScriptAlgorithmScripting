
function pairElement(str) {
  
  var pairs = {A:'T', T:'A', C:'G', G:'C'};
  
  return str.split('').map((char)=>{
    return [char, pairs[char]];
  });
}

pairElement("GCG");