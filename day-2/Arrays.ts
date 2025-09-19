// Array of strings
let names: string[] = ["Siva", "Kumar", "Ravi"];

// Array of numbers (two ways)
let scores: number[] = [90, 85, 100];
let marks: Array<number> = [75, 88, 92];

// Mixed types not allowed unless union
let mixed: (string | number)[] = ["Siva", 40, "Kumar"];
