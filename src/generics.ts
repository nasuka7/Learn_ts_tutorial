function copy<T extends { name: string }, U extends keyof T>(value: T, key: U ): T {
  value[key]
  return value;
}
console.log(copy({ name: "Hamabe", age: 38}, "name"));

interface Todo {
  title: string;
  text: string;
}
type Todoable = Partial<Todo>
type ReadTodo = Readonly<Todo>

const fetchData: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve("hello");
  }, 3000);
})

fetchData.then(data => {
  data.toUpperCase();
})

const vegetable: Array<string> = ["tomato", "Broccoli", "Asparagus"];