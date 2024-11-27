import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import { TodoContext } from '../App2';

const TodoListFilter2 = () => {

    const { filter, setFilter } = useContext(TodoContext);

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


TodoListFilter2.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
};

export default TodoListFilter2;
