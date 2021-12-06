import React from "react";
import "./paged.css";
function Paginado({ shoesPorPaginaPorPagina, shoes, paginado, previousPage, nextPage }) {
  const pageNumber = [];
  //el Math.ceil redondea para arriba
  for (let i = 1; i <= Math.ceil(shoes / shoesPorPaginaPorPagina); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <footer>
        <nav>
          <ul className='paginado'>
            <button onClick={previousPage} className='btn1'>
              Anterior
            </button>
            {pageNumber &&
              pageNumber.map(number => {
                return (
                  <li key={number} value={number} className='pag' onClick={() => paginado(number)}>
                    {number}
                  </li>
                );
              })}
            <button onClick={nextPage} className='btn2'>
              Siguiente
            </button>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Paginado;
