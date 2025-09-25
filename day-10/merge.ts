function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// Usage
const objA = {name: "Siva" };
const objB = { age: 40 };

const mergedObj = merge(objA, objB);
console.log(mergedObj);
// Output: { name: 'Siva', age: 40 }

// TypeScript knows mergedObj has both name and age
console.log(mergedObj.name); // "Siva"
console.log(mergedObj.age); // 40
