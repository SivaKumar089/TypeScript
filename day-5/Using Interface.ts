interface User {
  id: number;
  name: string;
  email?: string; // optional
}

function printUser(user: User): void {
  console.log(
    `ID: ${user.id}, Name: ${user.name}, Email: ${user.email ?? "N/A"}`
  );
}

const user1: User = { id: 1, name: "Siva", email: "siva@example.com" };
printUser(user1);
