/* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms. */

var fib1 = 1;
var fib2 = 2;
var fib3 = 3;
var total = 0;

for (i = fib2; i < 4000000; i = fib1 + fib2) {
  fib1 = fib2; 
  fib2 = fib3;
  fib3 = fib1 + fib2;
  if (i % 2 === 0) {
    total += i;
  }
}

console.log(total);