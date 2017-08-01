
function booWho(bool) {
 
  
  return (typeof bool === 'boolean');
}

booWho(null);

//METHOD 2 

function booWho(bool) {
 
  return (bool===true || bool===false );
  

}

booWho(null);