const a = 0;

function isBiggerOrSmaller() {
  if (a < 0) {
    return 'negative';
  } else if (a > 0) {
    return 'positive';
  }
  return 'zero';
}

console.log(isBiggerOrSmaller());