type Product = {
  id: number;
  name: string;
  price: number;
};

function printProduct(product: Product): void {
  console.log(
    `ID: ${product.id}, Name: ${product.name}, Price: ₹${product.price}`
  );
}

const product1: Product = { id: 101, name: "Laptop", price: 50000 };
printProduct(product1);
