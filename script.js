function fibonacci(num) {
// your code here
	 if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    let fib = 0;

    for (let i = 2; i <= num; i++) {
      fib = a + b;
      a = b;
      b = fib;
    }

    return fib;
  }
}

module.exports = fibonacci;
