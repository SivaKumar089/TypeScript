function multiply(a: number, b: number = 2): number {
  return a * b;
}

console.log(multiply(5)); // 10 (uses default b=2)
console.log(multiply(5, 3)); // 15
