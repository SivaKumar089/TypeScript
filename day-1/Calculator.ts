function calculator(a: number, b: number, operator: string): number | string {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") {
    return b !== 0 ? a / b : "Error: Division by zero";
  }
  return "Error: Invalid operator";
}

// Example usage
console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 5, "*")); // 50
console.log(calculator(10, 5, "/")); // 2
console.log(calculator(10, 0, "/")); // Error: Division by zero
