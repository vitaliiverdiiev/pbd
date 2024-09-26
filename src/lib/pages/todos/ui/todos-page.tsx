import { UnknownType } from "@/shared/types";

export const getTodos = async () => {
  try {
    const response = await fetch("http://localhost:6901/todos", {
      next: {
        revalidate: 120,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch todos");
    }

    return await response.json();
  } catch (error) {
    return error;
  }
};

export const TodosPage = async () => {
  const todos = await getTodos();

  if (!todos) {
    return <span>Errorka poluchaietsa</span>;
  }

  console.log("!!!!!!!", { todos });
  return (
    <div className="bordered h-full">
      {todos.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
};
