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
                All
            </button>
            <button
                className={`botoesfiltro ${filter === 'active' ? 'selected' : ''}`}
                onClick={() => handleFilterClick('active')}
            >
                Active
            </button>
            <button
                className={`botoesfiltro ${filter === 'completed' ? 'selected' : ''}`}
                onClick={() => handleFilterClick('completed')}
            >
                Completed
            </button>
        </div>
    );
}

export default TodoListFilter;
