// Interface for user
interface User {
  id: number;
  name: string;
}

// Type alias for order
type Order = {
  orderId: number;
  amount: number;
};

// Function using User
function welcomeUser(user: User): string {
  return `Welcome, ${user.name}! (ID: ${user.id})`;
}

// Function using Order
function orderSummary(order: Order): string {
  return `Order #${order.orderId} has amount ₹${order.amount}`;
}

const user: User = { id: 101, name: "Siva" };
const order: Order = { orderId: 5001, amount: 2500 };

console.log(welcomeUser(user));
console.log(orderSummary(order));
