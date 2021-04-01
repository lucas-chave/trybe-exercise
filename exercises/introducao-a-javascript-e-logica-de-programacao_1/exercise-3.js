const a = 5;
const b = 10;
const c = 15;

function isBigger () {
  if(a > b && c) {
    return a;
  } else if(b > c && a) {
    return b
  } else if(c > b && a) {
    return c;
  }
}

console.log(isBigger());