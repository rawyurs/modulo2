// ImageList.jsx
import React, { useState } from 'react';
import { useGetCatImagesQuery } from './createApi';

const ImageList = () => {
    const [page, setPage] = useState(1);
    const limit = 5; // Limite de imagens por página
    const order = 'asc'; // Ordem das imagens

    // Usando o hook do RTK Query para buscar as imagens
    const { data: images, error, isLoading, isError } = useGetCatImagesQuery({
        page,
        limit,
        order,
    });

    const handleNextPage = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    return (
        <div>
            <h1>Cat Images</h1>

            {/* Mostrar Loading */}
            {isLoading && <p>Loading...</p>}

            {/* Mostrar Erro */}
            {isError && <p>Erro ao carregar as imagens.</p>}

            {/* Exibir as imagens */}
            <div className="image-list">
                {images?.map((image, index) => (
                    <img key={index} src={image.url} alt="Cat" />
                ))}
            </div>

            {/* Paginação */}
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={page === 1}>
                    Previous
                </button>
                <span>{`Page ${page}`}</span>
                <button onClick={handleNextPage} disabled={images?.length < limit}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ImageList;
