import React from "react";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";

import { SearchDogs } from "../../redux/actions";
import style from "./NavBar.module.css"

const SearchBar = () => {
 const dispatch = useDispatch()
 const history = useHistory()

  function handleChange(e) {
    e.preventDefault();
    dispatch(SearchDogs(e.target.value))
  }

  function onClick(e) {
    e.preventDefault()
    history.push("/home")
  }



  return (
    <>
      <input className={style.SearchBar} type="text" placeholder="   busqueda..." onClick={onClick} onChange={handleChange}  />
    </>
  );
};
export default SearchBar;