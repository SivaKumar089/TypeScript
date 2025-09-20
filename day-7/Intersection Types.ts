type Person = { name: string };
type Employee = { id: number };
type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Siva",
  id: 101,
};
