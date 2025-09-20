function printLength(x: string | number) {
  if (typeof x === "string") {
    console.log("String length:", x.length);
  } else {
    console.log("Number squared:", x * x);
  }
}
