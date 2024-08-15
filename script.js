function fibonacci(num) {
  if (num === 1) {
    return 0;
  } else if (num === 2) {
    return 1;
  } else {
    let a = 0;
    let b = 1;
    let fib = 0;

    for (let i = 3; i <= num; i++) {
      fib = a + b;
      a = b;
      b = fib;
    }

    return b;
  }
}

module.exports = fibonacci;
