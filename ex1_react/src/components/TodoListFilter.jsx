import React from 'react';

const TodoListFilter = ({ filter, setFilter }) => {
    const handleFilterClick = (filterType) => {
        setFilter(filterType);
    };

    return (
        <div className="filtros">
            <button
                className={`botoesfiltro ${filter === 'all' ? 'selected' : ''}`}
                onClick={() => handleFilterClick('all')}
            >
                Todos
            </button>
            <button
                className={`botoesfiltro ${filter === 'active' ? 'selected' : ''}`}
                onClick={() => handleFilterClick('active')}
            >
                Em progresso
            </button>
            <button
                className={`botoesfiltro ${filter === 'completed' ? 'selected' : ''}`}
                onClick={() => handleFilterClick('completed')}
            >
                Terminadas
            </button>
        </div>
    );
}

export default TodoListFilter;
