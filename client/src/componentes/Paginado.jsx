import React from "react";
import "./Paginado.css"
export  function Paginado({recipesPerPage, recetas, paginado}) {
   
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(recetas/recipesPerPage) ; i++) {
        pageNumber.push(i)
        
    }

    return(
        <nav>
            <ul className="paginado">
                {
                    pageNumber &&
                    pageNumber.map(number => (
                        <ul className="item" key={number}>
                            <button className="button" onClick={() => paginado(number)}>{number}</button>
                        </ul>
                    )

                    )
                }
            </ul>
        </nav>
    )
}