// todo.ts

// Step 1: Define a type for Todo
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Step 2: Todo list array
let todos: Todo[] = [];

// Step 3: Add a todo
function addTodo(title: string): void {
  const newTodo: Todo = {
    id: todos.length + 1,
    title,
    completed: false,
  };
  todos.push(newTodo);
  console.log(`✅ Added: "${title}"`);
}

// Step 4: Mark a todo as completed
function completeTodo(id: number): void {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = true;
    console.log(`🎯 Completed: "${todo.title}"`);
  } else {
    console.log(`❌ Todo with id ${id} not found.`);
  }
}

// Step 5: Show all todos
function listTodos(): void {
  console.log("\n📌 Todo List:");
  todos.forEach((t) =>
    console.log(`${t.id}. ${t.title} [${t.completed ? "✔️" : "❌"}]`)
  );
}

// Example usage
addTodo("Learn TypeScript");
addTodo("Build Todo App");
listTodos();

completeTodo(1);
listTodos();
