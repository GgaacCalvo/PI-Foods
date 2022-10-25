import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getDiets,
  getRecipes,
  orderByName,
  orderByScore,
  filterRecipesByDiet,
} from "../store/actions";
import { Card } from "./Card";
import { Search } from "./Search";
import { Paginado } from "./Paginado";
import { useState } from "react";
import "./Home.css";
import { NavBar } from "./NavBar";
import { Loading } from "./Loading";
import * as React from "react";
import Button from "@mui/material/Button";

export function Home() {
  let recetas = useSelector((state) => state.recetas); // esto es para traer el state, se puede poner como parametro de la funcion y acceder desde match.state.props (creo que hay que importar esto, es para funciones de clases)

  const dietasTotales = useSelector((state) => state.dietas); // aca me traigo todas las dietas del state

  //traerme el dispatch con el hook useDistpatch
  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage, setRecipesPerPage] = useState(9);
  const endOfthePage = currentPage * recipesPerPage;
  const indexOfFirstRecipePage = endOfthePage - recipesPerPage;
  const currentRecipes = recetas.slice(indexOfFirstRecipePage, endOfthePage);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRecipes());
    dispatch(getDiets());
  }, [dispatch]);

  function handleOrderName(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
  }
  function handleOrderScore(e) {
    e.preventDefault();
    dispatch(orderByScore(e.target.value));
  }
  function handleDiets(e) {
    e.preventDefault();
    dispatch(filterRecipesByDiet(e.target.value));
    setCurrentPage(1);
  }

  function handleReset(e) {
    e.preventDefault();
    window.location.reload(); //refresh (f5)
  }
  return (
    <div className="contenedor-home">
      <div className="contenedor-pag">
        <div className="Nav-Bar-home">
          <NavBar />
        </div>
        <div className="cont-except-nav">
          <Link to="/createrecipe">
            <div className="createrecipe-home">
              <Button variant="contained" color="success">
                CREATE RECIPE
              </Button>
              {/* <h3 className="createrecipe-home">CREATE RECIPE</h3> */}
            </div>
          </Link>
          <h1 className="msjpre">Do you know what to cook today?</h1>
          <Search />
          <select className="select-home" onChange={handleOrderName}>
            <option value="all">All</option>
            <option value="asc">A to Z</option>
            <option value="desc">Z to A</option>
          </select>
          <select className="select-home" onChange={handleOrderScore}>
            <option value="all">All</option>
            <option value="low">Low Score</option>
            <option value="high">High Score</option>
          </select>
          <select className="select-home" onChange={handleDiets}>
            <option value="All">All</option>
            {console.log(dietasTotales)}
            {dietasTotales?.map((d) => (
              <option key={d.id} value={d.name}>
                {" "}
                {d.name}{" "}
              </option>
            ))}
          </select>
          <button className="button-reset-home" onClick={handleReset}>
            RESET
          </button>
        </div>
        {currentRecipes.length === 0 && currentRecipes ? (
          <Loading />
        ) : (
          <div>
            <div className="cards">
              {currentRecipes.map((receta) => {
                return (
                  <Link key={`${receta.id}`} to={`/recipes/${receta.id}`}>
                    <Card
                      key={receta.id}
                      id={receta.id}
                      name={receta.name}
                      image={receta.image}
                      diets={receta.diets}
                      healthScore={receta.healthScore}
                    />
                  </Link>
                );
              })}
            </div>
            <div className="paginado-home">
              <Paginado
                recipesPerPage={recipesPerPage}
                recetas={recetas.length}
                paginado={paginado}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
