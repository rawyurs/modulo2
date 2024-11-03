import React, { useState } from "react";

function TodoForm({ addTodo }) {

  const [tarefa, setTarefa] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!tarefa) return;
    addTodo(tarefa)
    setTarefa("")
  }

  return (
    <form onSubmit={handleSubmit} className="formatar-form">
      <input type="text" value={tarefa} onChange={(e) => setTarefa(e.target.value)}></input>
      <button className="btn btn_primary" type="submit">Add</button>
    </form>


  );
}

export default TodoForm;