
//METHOD 1

function convertHTML(str) {
  // &colon;&rpar;
  var entities = {

  	'&': '&amp;',
  	'<': '&lt;',
  	'>': '&gt;',
  	'\"': '&quot;',
  	'\'': '&apos;'
  };
 return str.split('').map(el=>{
  	return entities[el] || el;
  }).join('');
 
}

convertHTML("Dolce & Gabbana");
