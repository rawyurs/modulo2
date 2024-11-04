import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import TodoListFilter from "./components/TodoListFilter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Fazer o ex de TDW",
      isCompleted: false,
    },
  ]);
  const [filter, setFilter] = useState('all');

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

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') {
      return !todo.isCompleted;
    }
    if (filter === 'completed') {
      return todo.isCompleted;
    }
    return true;
  });

  return (
    <div className="App">
      <section className="card-todo">
        <h3>TodoMatic</h3>
        <p className="paragrafos">What needs to be done?</p>
        <TodoForm addTodo={addTodo} />
        <TodoListFilter filter={filter} setFilter={setFilter} />

        {filteredTodos.length > 0 && (
          <p>
            {filteredTodos.length} task{filteredTodos.length === 1 ? '' : 's'} remaining
          </p>
        )}

        {filteredTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            editTodo={editTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
