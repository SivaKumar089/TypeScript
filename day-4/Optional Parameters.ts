function greet(name: string, message?: string): string {
  return message ? `${message}, ${name}!` : `Hello, ${name}!`;
}

console.log(greet("Siva")); // Hello, Siva!
console.log(greet("Kumar", "Good Evening")); // Good Evening, Kumar!
