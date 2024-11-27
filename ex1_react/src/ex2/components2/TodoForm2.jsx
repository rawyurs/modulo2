import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { TodoContext } from "../App2"; // Ajuste o caminho para o App2 onde o contexto está definido

function TodoForm2() {
  const { addTodo } = useContext(TodoContext); // Acessa addTodo diretamente do contexto

  const [tarefa, setTarefa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tarefa) return;
    addTodo(tarefa); // Chama addTodo do contexto
    setTarefa("");
  };

  return (
    <form onSubmit={handleSubmit} className="formatar-form">
      <input
        type="text"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button className="btn btn_primary" type="submit">Adicionar</button>
    </form>
  );
}

// Removemos a necessidade de definir o propTypes para tarefa e setTarefa, pois o estado está sendo gerido localmente.
TodoForm2.propTypes = {
  tarefa: PropTypes.string,
  setTarefa: PropTypes.func,
};

export default TodoForm2;
