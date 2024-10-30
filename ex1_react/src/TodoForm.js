import React, { useState } from "react";

function TodoForm() {
  const [todasTarefas, setTarefas] = useState([]);
  const [tarefaInserida, setTarefaInserida] = useState("");

  function handleChange(e) {
    setTarefaInserida(e.target.value);
  }

  function submissao(e) {
    e.preventDefault();
    setTarefas([...todasTarefas, tarefaInserida]);
    setTarefaInserida("");
    console.log(tarefaInserida);
  }

  return (
    <div>
      <h1>TodoMatic</h1>
      <p>What needs to be done?</p>
      <form onSubmit={submissao}>
        <input type="text" value={tarefaInserida} onChange={handleChange} />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {todasTarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoForm;
