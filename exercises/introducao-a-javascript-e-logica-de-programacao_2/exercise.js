let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function sumArray() {
  let total =0;
  for(let index = 0; index < numbers.length; index += 1) {
    total += numbers[index];
  }
  return total;
}

console.log(sumArray());