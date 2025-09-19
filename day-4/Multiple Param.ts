function combine(a: string | number, b: string | number): string | number {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // number addition
  }
  return a.toString() + b.toString(); // string concatenation
}

// Examples
console.log(combine(5, 10)); // 15
console.log(combine("Hello", "TS")); // HelloTS
console.log(combine("Age: ", 40)); // Age: 40
