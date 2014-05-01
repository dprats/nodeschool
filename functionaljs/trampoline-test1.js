function factorial (n) {
  var _factorial = function myself (acc, n) {
  	console.log('calling _factorial('+acc+','+n+')');
    return n
    ? myself(acc * n, n - 1)
    : acc
  };
  
  return _factorial(1, n);
}

factorial(10);