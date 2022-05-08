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
import style from "./NavBar.module.css";

export default function NavBar() {
  const [state, setState] = useState(false);
  const [filter, setFilter] = useState("A Z");
  const [filter2, setFilter2] = useState("Mas Pesado");
  const temps = useSelector((state) => state.Temperaments);
  const ActualPath = useSelector((state) => state.Actualpath);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getemps());
  }, [dispatch]);

  function onclick(e) {
    e.preventDefault();
    setState(!state);
  }
  function alphabeticFilter(e) {
    e.preventDefault();
    if (e.target.value === "A Z") {
      setFilter("Z A");
      dispatch(orderAsc());
    } else {
      setFilter("A Z");
      dispatch(orderDesc());
    }
  }
  function weightfilter(e) {
    e.preventDefault();
    if (e.target.value === "Mas Pesado") {
      setFilter2("Mas ligero");
      dispatch(weightDown());
    } else {
      setFilter2("Mas Pesado");
      dispatch(weightUp());
    }
  }
  function procedenceFilter(e) {
    e.preventDefault();

    let index = e.target.selectedIndex;
    if (e.target.value === "DB") {
      dispatch(FilterDB());
    }
    if (e.target.value === "api") {
      dispatch(FilterAPI());
    }
    if (e.target.value === "ALL") {
      dispatch(getDogs());
    }
  }
  function onSelect(e) {
    e.preventDefault();
    if (e.target.value === "N/A") dispatch(getDogs());
    dispatch(TempFilter(e.target.value));
  }

  return (
    <>
    <div>

      <nav className={style.Container}>
        <div className={style.navRight}>
          <li style={{ paddingLeft: 0 }} className={style.navRight}>
            <Link to="/">
              <img
                src={paw}
                alt="home buton"
                style={{ borderRadius : 100, width: 40, height: 40 }}
              />
            </Link>
          </li>
          <li className={style.navRight}>
            <Link className={style.NavLinks} to="/home">
              Home
            </Link>
          </li>
          <li className={style.navRight}>
            <Link className={style.NavLinks} to="/create">
              Create
            </Link>
          </li>
        <div className={style.navLeft}>
          <SearchBar className={style.SearchBar} />
          {ActualPath !== "Create" && ActualPath !== "Detail" && (
            <button className={style.NavLinks} style={{border:"none"}} onClick={onclick}>
              Filtros
            </button>
          )}
        </div>
        </div>
        {state && (
          <>
            <div className={style.filter}>
              <div className={style.Filterdiv}> filtrar alfabeticamente
                <button style={{"width": "100%"}} value={filter} onClick={alphabeticFilter}>
                  {filter}
                </button>
              </div>
              <div className={style.Filterdiv}> filtrar peso
                <button  value={filter2} onClick={weightfilter}>
                  {filter2}
                </button>
              </div>
              <div className={style.Filterdiv}>  creado en: 
                <select  onChange={procedenceFilter}>
                  <option value="ALL">ALL</option>
                  <option value="DB">DB</option>
                  <option value="api">API</option>
                </select>
                </div >
                <div className={style.Filterdiv}> temperamentos
                <select  onChange={onSelect}>
                  <option value="N/A">N/A</option>
                  {temps &&
                    temps.map((temp) => (
                      <option key={temp.nombre} value={temp.nombre}>
                        {temp.nombre}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </>
        )}
      </nav>
      <div className={style.Spliter} />
        </div>
    </>
  );
}
