function receivesAFunction(spy){
  return spy();
}
receivesAFunction(function(){return spy;})

function returnsANamedFunction() {
  return function fn() { 
}
  };

function returnsAnAnonymousFunction() {
  return function() { 
}
  };
  

