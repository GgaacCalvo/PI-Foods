import { useState } from "react";
import "./Search.css";
import { useDispatch } from "react-redux";
import { getRecipesName } from "../store/actions";
import { useSelector } from "react-redux";

export function Search() {
  const [search, setSearch] = useState("");
  let dispatch = useDispatch();

  const recipes = useSelector((state) => state.recetas);

  const onSubmit = (e) => {
    e.preventDefault();
    validate();
    if (!search.trim()) {
      return alert("Please insert a valid food name");
    } else {
      dispatch(getRecipesName(search.trim()));
      console.log(recipes);
      setSearch("");
    }
  };
  const validate = () => {
    if (!search.trim()) {
      return alert("Please insert a valid food name");
    }
  };
  function onInputChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="cont-search">
      <input
        className="input-search"
        type="text"
        placeholder="Search your recipe"
        onChange={onInputChange}
        value={search}
      />
      <button className="btnSearch" type="submit" onClick={onSubmit}>
        SEARCH
      </button>
    </div>
  );
}
