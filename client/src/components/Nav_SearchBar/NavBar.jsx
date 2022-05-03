import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import paw from "../../imgs/pawprint.png";
import {
  orderAsc,
  orderDesc,
  weightUp,
  weightDown,
  FilterDB,
  FilterAPI,
  getDogs,
  getemps,
  TempFilter,
} from "../../redux/actions";
import SearchBar from "./searchBar.jsx";

export default function NavBar() {
  const [state, setState] = useState(false);
  const [filter, setFilter] = useState("a-z");
  const [filter2, setFilter2] = useState("↑");
  const temps = useSelector((state) => state.Temperaments);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getemps());
    console.log(temps);
  }, [dispatch]);


  function onclick(e) {
    e.preventDefault();
    setState(!state);
  }
  function alphabeticFilter(e) {
    e.preventDefault();
    if (e.target.value === "a-z") {
      setFilter("z-a");
      dispatch(orderAsc());
    } else {
      setFilter("a-z");
      dispatch(orderDesc());
    }
  }
  function weightfilter(e) {
    e.preventDefault();
    if (e.target.value === "↑") {
      setFilter2("↓");
      dispatch(weightDown());
    } else {
      setFilter2("↑");
      dispatch(weightUp());
    }
  }
  function procedenceFilter(e) {
    e.preventDefault()
    console.log(e.target.value);
    let index = e.target.selectedIndex;
    console.log(e.target.options[index]);
    if(e.target.value === "DB"){
      dispatch(FilterDB())
    }
    if(e.target.value === "api"){
      dispatch(FilterAPI())
    }
    if(e.target.value === "ALL"){
      dispatch(getDogs())
    }
  }
  function onSelect(e){
    e.preventDefault()
    if(e.target.value === "N/A") dispatch(getDogs())
    dispatch(TempFilter(e.target.value))
  }

  return (
    <ul style={{ display: "flex" }}>
      <SearchBar />
      <li style={{ padding: 10, display: "flex" }}>
        <Link to="/home">
          <img src={paw} alt="home buton" style={{ width: 30, height: 30 }} />
        </Link>
      </li>
      <li style={{ padding: 10, display: "flex" }}>
        <Link to="/">landing</Link>
      </li>
      <li style={{ padding: 10, display: "flex" }}>
        <Link to="/create">Create</Link>
      </li>
      <button onClick={onclick}>pressme</button>
      {state && (
        <>
          <button value={filter} onClick={alphabeticFilter}>
            {filter}
          </button>
          <button value={filter2} onClick={weightfilter}>
            {filter2}
          </button>
          <select onChange={procedenceFilter}>
            <option value="ALL">ALL</option>
            <option value="DB">DB</option>
            <option value="api">API</option>
          </select>
            <button>a</button>
          <select onChange={onSelect}>
            <option value="N/A">N/A</option>
            {temps && temps.map(temp => <option key={temp.nombre} value={temp.nombre}>{temp.nombre}</option>)}
          </select>
          
        </>
      )}
    </ul>
  );
}