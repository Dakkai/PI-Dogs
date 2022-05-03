import React, { useEffect, useState } from "react";
import { getDogs, orderAsc } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import TempsDetail from "./tempsDetail";
import Paginado from "./paginas";
import placeHolderimg from "../imgs/placeHolder.jpg";
import { Link } from "react-router-dom";

const Dogs = () => {
  const dogs = useSelector((state) => state.actualDogs);
  const dispatch = useDispatch();
  const [CurrentPage, setCurrentPage] = useState(1);
  const [DogsPerPage, setDogsPerPage] = useState(8);
  const LastDog = CurrentPage * DogsPerPage;
  const FirstDog = LastDog - DogsPerPage;
  const Page = dogs.slice(FirstDog, LastDog);
  

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const paginas = (Pag) => {
    setCurrentPage(Pag);
  };

  return (
    <>
    <div>
      {Page &&
        Page.map((dog) => (
          <div key={dog.id}>
            <TempsDetail dog={dog} />
            <div>
            <Link to={`/dog/${dog.id}`}>            
            <h2>{dog.name}</h2>
              <img
                src={dog.img || placeHolderimg}
                alt="not found"
                style={{ width: 100, height: 100 }}
              />{" "}
            </Link>
            </div>
            <h4> Peso Maximo{dog.pesoMax}</h4>
            <h4> Peso Minimo{dog.pesoMin}</h4>
          </div>
        ))}
        </div>
        <div> 
      <Paginado 
      dogs={dogs}
       DogsPerPage={DogsPerPage} 
       paginas={paginas}
       CurrentPage = {CurrentPage}
        />
        </div>
    </>
  );
};

export default Dogs;
