import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetDogId } from "../redux/actions";
import { ClearState } from "../redux/actions";
import TempsDetail from "./tempsDetail";

import placeHolderimg from "../imgs/placeHolder.jpg";

export default function DogDetail(props) {
  const { id } = useParams();
  const Dog = useSelector((state) => state.DogDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDogId(id));

    return () => {
      dispatch(ClearState("DogDetail"));
    };
  }, [dispatch, id]);

  console.log(Dog);

  return (
    <>
      {Dog.name ? (
        <>
          <h1>Raza {Dog.name}</h1>
          <h2>Vive de {Dog.life_span} Años </h2>
          <h3> puede medir desde {Dog.alturamin} CM</h3>
          <h3> hasta {Dog.alturamax} CM</h3>
          <h3>puede pesar desde {Dog.pesoMin}KG </h3>
          <h3>hasta {Dog.pesoMax} KG</h3>
          <TempsDetail dog={Dog} />
          <img src={Dog.img || placeHolderimg} alt="perro" />
        </>
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}



