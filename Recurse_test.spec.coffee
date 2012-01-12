require "./Recurse.coffee"

describe 'tail recursion', ->
  beforeEach ->
    @func = (input, acc=0) ->
      return acc if input == 0
      return [input - 1, acc + input]

  it 'can recurse the same function', ->
    expect(recurse(5, @func)).toBe(15)
