let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function sumArray() {
  let total =0;
  for(let index = 0; index < numbers.length; index += 1) {
    total += numbers[index]; 
  }
  
  total / numbers.length;
  
  if(total > 20) {
    return 'valor maior que 20';
  } 
  return 'valor menor ou igual a 20';
}

console.log(sumArray());