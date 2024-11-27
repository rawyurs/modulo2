import React, { useState, createContext } from "react";
import "../App.css";
import Todo2 from "../ex2/components2/Todo2"; // Certifique-se de que este caminho está correto
import TodoForm2 from "../ex2/components2/TodoForm2";
import TodoListFilter2 from "../ex2/components2/TodoListFilter2";
import Search2 from "../ex2/components2/Search2";
import PropTypes from 'prop-types';

// Aqui está a criação do contexto
export const TodoContext = createContext();

function App2() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todosEx2");
    return savedTodos ? JSON.parse(savedTodos) : [
      {
        id: 1,
        text: "Fazer o ex de TDW",
        isCompleted: false,
      }];
  });

  const [search, setSearch] = useState("");
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
    <TodoContext.Provider value={{ todos, removeTodo, editTodo, toggleTodo, addTodo, search, setSearch, filter, setFilter }}>
      <div className="App">
        <section className="card-todo">
          <h3>Exercício2</h3>
          <p className="paragrafos">O que precisa ser feito? TAMOS NO EX2</p>
          <TodoForm2 addTodo={addTodo} />
          <TodoListFilter2 filter={filter} setFilter={setFilter} />
          <Search2 search={search} setSearch={setSearch} />

          {filteredTodos.length > 0 && (
            <p>
              {filteredTodos.length} task{filteredTodos.length === 1 ? '' : 's'} em falta
            </p>
          )}

          {filteredTodos
            .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())
            )
            .map((todo) => (
              <Todo2
                key={todo.id}
                todo={todo}
              />
            ))}
        </section>
      </div>
    </TodoContext.Provider>
  );
}

export default App2;
