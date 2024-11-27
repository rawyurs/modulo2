// ImageList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from './actions/actions';

const ImageList = () => {
    const dispatch = useDispatch();
    const { loading, images, error, currentPage, totalPages } = useSelector(
        (state) => state
    );

    useEffect(() => {
        dispatch(fetchImages(currentPage));  // Carrega as imagens da página atual
    }, [dispatch, currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            dispatch(fetchImages(currentPage + 1));  // Carrega a próxima página
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            dispatch(fetchImages(currentPage - 1));  // Carrega a página anterior
        }
    };

    return (
        <div>
            <h1>gatinhos...</h1>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <div className="image-list">
                {images.map((image, index) => (
                    <img key={index} src={image.url} alt="Cat" />
                ))}
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Voltar
                </button>
                <span>{`Página ${currentPage} de ${totalPages}`}</span>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Seguinte
                </button>
            </div>
        </div>
    );
};

export default ImageList;
