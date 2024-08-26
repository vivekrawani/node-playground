async function fetchTodos() {
  const data = await (
    await fetch("https://jsonplaceholder.typicode.com/todos/1")
  ).json();
  return data;
}
