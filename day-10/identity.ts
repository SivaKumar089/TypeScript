// identity function returns the value itself
function identity<T>(arg: T): T {
  return arg;
}

// Usage
let num = identity<number>(42);
let str = identity<string>("Hello");
let arr = identity<number[]>([1, 2, 3]);

console.log(num); // 42
console.log(str); // "Hello"
console.log(arr); // [1, 2, 3]
