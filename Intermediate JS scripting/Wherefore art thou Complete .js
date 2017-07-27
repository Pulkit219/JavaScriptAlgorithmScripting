function whatIsInAName(collection, source) {

  var arr = collection.filter((obj)=>{

for(i in source)
{
if(obj[i]!= source[i])
{
return false;}
}
return true;
});

  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });