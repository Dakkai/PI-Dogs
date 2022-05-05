import React, { useEffect, useState } from "react";
import { getDogs } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import TempsDetail from "./tempsDetail";
import Paginado from "../paginas";
import placeHolderimg from "../../imgs/placeHolder.jpg";
import Loading from "../../imgs/preview.gif"
import { Link } from "react-router-dom";
import style from "./Dogs.module.css";
const Dogs = () => {
  const dogs = useSelector((state) => state.actualDogs);
  const dispatch = useDispatch();
  const [CurrentPage, setCurrentPage] = useState(1);
  const [DogsPerPage, setDogsPerPage] = useState(8);
  const LastDog = CurrentPage * DogsPerPage;
  const FirstDog = LastDog - DogsPerPage;
  const Page = dogs.slice(FirstDog, LastDog);

  useEffect(() => {
    console.log(Page)
    dispatch(getDogs());
  }, [dispatch]);

  const paginas = (Pag) => {
    setCurrentPage(Pag);
  };

  return (
    <>
      <div className={style.conteiner}>
        <div className={style.DogsContainer}>
          {Page ?
            Page.map((dog) => (
              <Link className={style.DogAncor} to={`/dog/${dog.id}`}>
                <div className={style.DogLink} style={{position: "relative"}}>
                  <div className={style.DogContain} >
                    <div className={style.DogCard} key={dog.id}>
                      {console.log(dog.img)}
                      <img
                        src={dog.img || placeHolderimg}
                        alt="not found"
                        className={style.DogImg}
                      />{" "}
                    </div >
                    <div  className={style.DogInfo}>
                      <h2 className={style.Dogname}>{dog.name}</h2>
                      <h4 className={style.DogData} > Peso Maximo:  {dog.pesoMax} KG</h4>
                      <h4 className={style.DogData}> Peso Minimo:  {dog.pesoMin} KG</h4>
                      <TempsDetail dog={dog} />
                    </div>
                  </div>
                </div>
              </Link>
            )):<img style={{height: "80vh",width: "100vw"}} src={Loading} alt="" />}
        </div>
        <div>
          <Paginado
            dogs={dogs}
            DogsPerPage={DogsPerPage}
            paginas={paginas}
            CurrentPage={CurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Dogs;







//a     color: white;