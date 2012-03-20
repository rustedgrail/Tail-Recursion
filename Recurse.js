
  global.recurse = function(input, func) {
    var output;
    output = func(input);
    while (output instanceof Array) {
      output = func(output[0], output[1]);
    }
    return output;
  };
