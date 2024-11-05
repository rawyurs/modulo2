import React from 'react'

const Search = ({ search, setSearch }) => {
    return (
        <div className="search">
            <p className='paragrafos'>Pesquisar Tarefa</p>
            <input type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default Search

