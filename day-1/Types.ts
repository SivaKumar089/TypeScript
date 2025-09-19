// string
let username: string = "Siva";

// number
let age: number = 40;

// boolean
let isDeveloper: boolean = true;

// any (avoid in real projects if possible)
let randomValue: any = 123;
randomValue = "hello"; // valid
randomValue = true;    // valid

// unknown (safer than any, forces type checking)
let input: unknown = "hello";
if (typeof input === "string") {
  console.log(input.toUpperCase()); // safe
}

// null & undefined
let nullableValue: null = null;
let notAssigned: undefined = undefined;
