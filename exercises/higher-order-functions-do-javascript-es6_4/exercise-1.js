const assert = require("assert");

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  const arrayNew = arrays.reduce((acumulador, valorAtual) => {
    return acumulador.concat(valorAtual);
  }, []);
  return arrayNew
}
assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
