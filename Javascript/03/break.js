let factorial = 1
let count = 10
while (true) {
  factorial *= count;
  count--
  if(count == 1) break
}

console.log(factorial);