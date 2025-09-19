interface User {
  id: number;
  name: string;
  email: string; // required
}

// Using interface
const user1: User = {
  id: 101,
  name: "Siva",
  email: "siva@example.com",
};

console.log(user1);


interface User {
  id: number;
  name: string;
  email?: string;   // optional
  readonly role: string; // cannot be changed after creation
}

const user4: User = {
  id: 104,
  name: "Arun",
  role: "Admin",
};

console.log(user4);

// user4.role = "User"; ❌ Error: Cannot assign to 'role' because it is a read-only property.
