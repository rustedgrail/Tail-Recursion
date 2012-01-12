global.recurse = (input, func) ->
  output = func(input)
  while output instanceof Array
    output = func(output[0], output[1])
  output
