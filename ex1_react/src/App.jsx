import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Fazer o ex de TDW",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <section className="card-todo">
        <h3>TodoMatic</h3>
        <p className="paragrafos">What needs to be done?</p>
        <TodoForm addTodo={addTodo} />

        {todos.length > 0 && (
          <p>
            {todos.length} task{todos.length === 1 ? '' : 's'} remaining
          </p>
        )}

        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
