function formatValue(val: string | number | Date) {
  if (typeof val === "string") {
    return `String: ${val.toUpperCase()}`;
  } else if (typeof val === "number") {
    return `Number doubled: ${val * 2}`;
  } else if (val instanceof Date) {
    return `Date: ${val.toDateString()}`;
  }
  return "Unknown type";
}

// Test
console.log(formatValue("hello")); // String: HELLO
console.log(formatValue(42)); // Number doubled: 84
console.log(formatValue(new Date())); // Date: Sat Sep 20 2025
