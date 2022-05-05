import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetDogId, SetActualPath } from "../../redux/actions";
import { ClearState } from "../../redux/actions";
import style from "./DogDetail.module.css";

import placeHolderimg from "../../imgs/placeHolder.jpg";
import Loading from "../../imgs/preview.gif"
import NavBar from "../Nav_SearchBar/NavBar";

export default function DogDetail(props) {
  const { id } = useParams();
  const Dog = useSelector((state) => state.DogDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDogId(id));
    dispatch(SetActualPath("Detail"));

    return () => {
      dispatch(ClearState("DogDetail"));
      dispatch(ClearState("Actualpath"));
    };
  }, [dispatch, id]);

  console.log(Dog);

  return (
    <>
    <NavBar/>
      {Dog.name ? (
        <>
          <div className={style.Conteiner}>
            <div className={style.DataConteiner}>
              <h1>{Dog.name}</h1>
              <h2>Esta raza:</h2>
              <h3> Puede vivir aproximadamente {Dog.life_span} Años </h3>
              <div className={style.dataDiv}>
                <h4> puede medir desde {Dog.alturamin} CM</h4>
                <h4> hasta {Dog.alturamax} CM</h4>
              </div>
              <div className={style.dataDiv}>
                <h4>puede pesar desde {Dog.pesoMin}KG </h4>
                <h4>hasta {Dog.pesoMax} KG</h4>
              </div>
              <div className={style.Temps}>
                {" "}
                Temperamento:
                {Dog.Temperamentos ? (
                  Dog.Temperamentos.map((temp) => (
                    <h5 className={style.temp} key={temp}>
                      {temp}
                    </h5>
                  ))
                ) : (
                  <div>Esta informacion no esta disponible </div>
                )}
              </div>
            </div>
            <img
              id={style.DogImg}
              src={Dog.img || placeHolderimg}
              alt="perro"
            />
          </div>
        </>
      ) : (
        <img style={{height: "100vh",width: "100vw"}} src={Loading} alt="" />
      )}
    </>
  );
}
