//Tools useful when developing the page


//Prints an object and all of its values. Useful for debugging
printObject = function (o){
    var out = '';
  for (var p in o) {
    out += p + ': ' + o[p] + '\n';
  }
  alert(out);
}