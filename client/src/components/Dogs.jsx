import React, { useEffect, useState } from "react";
import { getDogs, orderAsc } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import TempsDetail from "./tempsDetail";
import placeHolderimg from "../imgs/perritoChiquito.jpg"


const Dogs = () => {
  const dogs = useSelector((state) => state.actualDogs);
  const dispatch = useDispatch();
  const [CurrentPage, setCurrentPage]= useState(1)
  const [DogsPerPage,setDogsPerPage] = useState(8)
  const LastDog = CurrentPage * DogsPerPage
  const FirstDog = LastDog - DogsPerPage
  const Page = dogs.slice(FirstDog,LastDog)
  console.log(CurrentPage,DogsPerPage)
  console.log(dogs)
  console.log(dogs.slice(FirstDog,LastDog))
  
  useEffect(() => {
    dispatch(getDogs());
    
  }, [dispatch]);
  
  
  
 
  return (
    <>
      {Page &&
        Page.map((dog) => (
          <div key={dog.id}>
            <h2>{dog.name}</h2>
            <TempsDetail dog={dog} />
            <div>
              <img
                src={dog.imagen || placeHolderimg}
                alt="not found"
                style={{ width: 100, height: 100 }}
              />{" "}
            </div>
            <h4>{dog.pesoMax}</h4>
            <h4>{dog.pesoMin}</h4>
          </div>
        ))}
    </>
  );
};

export default Dogs;
