import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Nav_SearchBar/NavBar.jsx";
import placeHolder from "../../imgs/placeHolder.jpg";
import { createDog, validations } from "./createcomtroller";
import { ClearState, SetActualPath } from "../../redux/actions/index.js";

import style from "./CreateDog.module.css";
export default function CreateDog() {
  const temps = useSelector((state) => state.Temperaments);

  const dispatch = useDispatch();

  const [data, setData] = useState({
    name: "",
    alturaMax: "",
    alturaMin: "",
    pesoMax: "",
    pesoMin: "",
    life_span: "",
    img: "",
    temperamento: [],
  });
  const [error, setErrors] = useState({
    name: "campo vacio",
    alturaMax: "campo vacio",
    alturaMin: "campo vacio",
    pesoMax: "campo vacio",
    pesoMin: "campo vacio",
    life_span: "campo vacio",
    temperamento: "campo vacio",
    img: "",
  });

  useEffect(() => {
    dispatch(SetActualPath("Create"));

    return () => {
      dispatch(ClearState("Actualpath"));
    };
  }, [dispatch]);

  function handleChange(e) {
    setData(() => {
      const newstate = {
        ...data,
        [e.target.name]: e.target.value,
      };
      setErrors(validations(newstate));
      return newstate;
    });
  }
  function OnErrorImg() {
    setErrors({
      ...error,
      img: "coloque una imagen valida o deje el campo vacio",
    });
  }

  function onSelect(e) {
    const buscar = data.temperamento.find((temp) => temp === e.target.value);
    if (!buscar) {
      setData(() => {
        const newstate = {
          ...data,
          temperamento: [...data.temperamento, e.target.value],
        };
        setErrors(validations(newstate));
        return newstate;
      });
    }
  }
  function onClick(e) {
    setData(() => {
      const newstate = {
        ...data,
        temperamento: data.temperamento.filter(
          (temp) => temp !== e.target.value
        ),
      };
      setErrors(validations(newstate));
      return newstate
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (
      error.img ||
      error.name ||
      error.alturaMin ||
      error.alturaMax ||
      error.pesoMax ||
      error.pesoMin ||
      error.life_span ||
      error.temperamento
    ) {
      alert("Algo salio mal");
    } else {
      createDog(data);
      alert("Raza creada");
    }
  }

  return (
    <>
      <NavBar />
      <div className={style.Conteiner}>
        <img
          id={style.dogImg}
          onError={OnErrorImg}
          src={data.img || placeHolder}
          alt=""
        />
        <form className={style.DogForm} onSubmit={handleSubmit}>
          <div>
            <label>
              nombre{" "}
              <input
                placeholder="Husky..."
                type="text"
                name="name"
                onChange={handleChange}
              />
              {error.name && error.name !== "campo vacio" ? (
                <div className={style.errDiv}>{error.name}</div>
              ) : (
                <></>
              )}
            </label>
          </div>
          <div>
            <label>
              altura maxina{" "}
              <input
                placeholder="60..."
                type="number"
                name="alturaMax"
                onChange={handleChange}
              />{" "}
              CM
              {error.alturaMax && error.alturaMax !== "campo vacio" ? (
                <div className={style.errDiv}>{error.alturaMax}</div>
              ) : (
                <></>
              )}
            </label>
          </div>
          <div>
            <label>
              altura minima{" "}
              <input
                placeholder="30..."
                type="number"
                name="alturaMin"
                onChange={handleChange}
              />{" "}
              CM
              {error.alturaMin && error.alturaMin !== "campo vacio" ? (
                <div className={style.errDiv}>{error.alturaMin}</div>
              ) : (
                <></>
              )}
            </label>
          </div>
          <div>
            <label>
              peso maximo{" "}
              <input
                placeholder="10..."
                type="number"
                name="pesoMax"
                onChange={handleChange}
              />{" "}
              KG
              {error.pesoMax && error.pesoMax !== "campo vacio" ? (
                <div className={style.errDiv}>{error.pesoMax}</div>
              ) : (
                <></>
              )}
            </label>
          </div>
          <div>
            <label>
              peso minimo{" "}
              <input
                placeholder="5..."
                type="number"
                name="pesoMin"
                onChange={handleChange}
              />{" "}
              KG
              {error.pesoMin && error.pesoMin !== "campo vacio" ? (
                <div className={style.errDiv}>{error.pesoMin}</div>
              ) : (
                <></>
              )}
            </label>
          </div>
          <div>
            <label>
              puede vivir entre{" "}
              <input
                placeholder=" 5 - 10...  "
                type="text"
                name="life_span"
                onChange={handleChange}
              />{" "}
              Años
              {error.life_span && error.life_span !== "campo vacio" ? (
                <div className={style.errDiv}>{error.life_span}</div>
              ) : (
                <></>
              )}
            </label>
          </div>
          <div>
            <label>
              Imagen{" "}
              <input
                placeholder="url"
                type="text"
                name="img"
                onChange={handleChange}
              />
              {error.img ? (
                <div className={style.errDiv}>{error.img}</div>
              ) : (
                <></>
              )}
            </label>
          </div>
          <div>
            {" "}
            Temperamentos{" "}
            <select onChange={onSelect}>
              {temps &&
                temps.map((temp) => (
                  <option key={temp.nombre} value={temp.nombre}>
                    {temp.nombre}
                  </option>
                ))}
            </select>
            {error.temperamento && error.temperamento !== "campo vacio" ? (
              <div className={style.errDiv}>{error.temperamento}</div>
            ) : (
              <></>
            )}
          </div>
          <div>
            <input type="submit" value="Crear" />
          </div>
        </form>
        <div className={style.TempConteiner}>
          {data.temperamento &&
            data.temperamento.map((temp) => (
              <>
                <button className={style.temp} value={temp} onClick={onClick}>
                  {temp}
                </button>
              </>
            ))}
        </div>
      </div>
    </>
  );
}
