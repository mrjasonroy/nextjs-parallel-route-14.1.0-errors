export default async function Page({ params: { id } }: { params: { id: string } }) {
  console.log('id', id);
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
  const res = await fetch(url);
  const todores = await res.json();
  console.log('todo', todores);
  const todo: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  } = todores;
  return (
    <div className="border-red-600 p-4 bg-red-50 m-4">
      <span className="my-2">Header Slot</span>
      <h1>{todo.title}</h1>
    </div>
  );
 }