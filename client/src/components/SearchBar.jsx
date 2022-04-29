import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs ,SearchDogs } from "../redux/actions";

const SearchBar = () => {
 const dispatch = useDispatch()


  function handleChange(e) {
    e.preventDefault();
    dispatch(SearchDogs(e.target.value))
  }

  return (
    <>
      <input style={{margin: 10}}type="text" placeholder="busqueda..." onChange={handleChange}  />
    </>
  );
};
export default SearchBar;
