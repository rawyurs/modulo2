import React, { useContext } from 'react';
import { TodoContext } from '../App2'; // Importe o contexto criado

const Search2 = () => {
    // Acesse o contexto para obter search e setSearch
    const { search, setSearch } = useContext(TodoContext);

    return (
        <div className="search">
            <p className='paragrafos'>Pesquisar Tarefa</p>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default Search2;
