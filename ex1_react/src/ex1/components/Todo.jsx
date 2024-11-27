import React, { useEffect, useState } from 'react';

const Todo = ({ todo, removeTodo, editTodo, toggleTodo, todos }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        editTodo(todo.id, newText);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setNewText(todo.text);
        setIsEditing(false);
    };

    useEffect(() => {
        localStorage.setItem("todosEx1", JSON.stringify(todos))
    }, [todos])

    return (
        <section className="todo">
            <div className="div">
                <input
                    type="checkbox"
                    id={`checkbox-${todo.id}`}
                    className="custom-checkbox"
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)}
                />
                {isEditing ? (
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                        className="edit-input"
                    />
                ) : (
                    <label htmlFor={`checkbox-${todo.id}`} className="pTarefa">{todo.text}</label>
                )}
            </div>
            <div className="btns">
                {isEditing ? (
                    <>
                        <button className="btnSave" onClick={handleSaveClick}>Guardar</button>
                        <button className="btnCancel" onClick={handleCancelClick}>Cancelar</button>
                    </>
                ) : (
                    <>
                        <button className="btnEdit" onClick={handleEditClick}>Editar</button>
                        <button className="btnDelete" onClick={() => removeTodo(todo.id)}>Eliminar</button>
                    </>
                )}
            </div>
        </section>
    );
};

export default Todo;
