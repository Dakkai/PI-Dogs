import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import placeHolder from "../imgs/placeHolder.jpg"
import { createDog, validations } from "./createcomtroller";
 

export default function CreateDog() {
  const temps = useSelector((state) => state.Temperaments);
  const dispatch = useDispatch()

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
    temperamento: "campo vacio"
  });
  // nombre no numeros /^[a-zñ A-ZÑ]+$/

  

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


  

  function onSelect(e) {
    const buscar = data.temperamento.find((temp) => temp === e.target.value);
    if (!buscar) {
      setData({
        ...data,
        temperamento: [...data.temperamento, e.target.value],
      });
      setErrors(validations({...data}))
    }
  }
  function onClick(e) {
    setData({
      ...data,
      temperamento: data.temperamento.filter((temp) => temp !== e.target.value),
    });
  }

  async function handleSubmit (e) {
    e.preventDefault();
    if (
      error.name ||
      error.alturaMin ||
      error.alturaMax ||
      error.pesoMax ||
      error.pesoMin ||
      error.life_span||
      error.temperamento
      ) {
      console.log(error);
    } else createDog(data)
  }

  return (
    <div>
      <NavBar />
      <img src={data.img||placeHolder}/>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            nombre <input type="text" name="name" onChange={handleChange} />
            {error.name && error.name !== "campo vacio"?<div>{error.name}</div> : <></>}
          </label>
        </div>
        <div>
          <label>
            altura maxina{" "}
            <input type="number" name="alturaMax" onChange={handleChange} />
            {error.alturaMax && error.alturaMax !== "campo vacio" ? <div>{error.alturaMax}</div>:<></>}
            metros
          </label>
        </div>
        <div>
          <label>
            altura minima{" "}
            <input type="number" name="alturaMin" onChange={handleChange} />
            {error.alturaMin && error.alturaMin !== "campo vacio" ? <div>{error.alturaMin}</div> : <></>}
            metros
          </label>
        </div>
        <div>
          <label>
            peso maximo{" "}
            <input type="number" name="pesoMax" onChange={handleChange} />
            {error.pesoMax && error.pesoMax !== "campo vacio" ? <div>{error.pesoMax}</div> : <></>}
            kg
          </label>
        </div>
        <div>
          <label>
            peso minimo{" "}
            <input type="number" name="pesoMin" onChange={handleChange} />
            {error.pesoMin && error.pesoMin !== "campo vacio" ? <div>{error.pesoMin}</div> : <></>}
            kg
          </label>
        </div>
        <div>
          <label>
            puede vivir entre{" "}
            <input type="text" name="life_span" onChange={handleChange} />
            {error.life_span && error.Temperamento !== "campo vacio" ? <div>{error.life_span}</div> : <></>}
            años
          </label>
        </div>
        <div>
          <label >
            <input type="text" name="img" onChange={handleChange}/>
          </label>
        </div>
        <div>
          <input type="submit" value="enviar" />
        </div>
        <div>
            {error.temperamento && error.temperamento !== "campo vacio" ? <div>{error.temperamento}</div> : <></>}
          <select onChange={onSelect}>
            {temps &&
              temps.map((temp) => (
                <option key={temp.nombre} value={temp.nombre}>
                  {temp.nombre}
                </option>
              ))}
          </select>
        </div>
      </form>
      {data.temperamento &&
        data.temperamento.map((temp) => (
          <>
            <h3>{temp}</h3>
            <button value={temp} onClick={onClick}>
              x
            </button>
          </>
        ))}
    </div>
  );
}
