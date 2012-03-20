
  require("./Recurse.coffee");

  describe('tail recursion', function() {
    beforeEach(function() {
      return this.func = function(input, acc) {
        if (acc == null) acc = 0;
        if (input === 0) return acc;
        return [input - 1, acc + input];
      };
    });
    return it('can recurse the same function', function() {
      return expect(recurse(5, this.func)).toBe(15);
    });
  });
