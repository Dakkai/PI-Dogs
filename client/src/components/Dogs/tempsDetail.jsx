import React, { useState } from "react";
import style from "./tempsDetail.module.css";
export default function DogCard(dog) {
  const [state, setState] = useState(false);
  dog = dog.dog;

  function onclick(e) {
    e.preventDefault();
    setState(!state);
  }
  return (
    <>
      <div className={style.Tempsdiv}>
        {state && (
          <div className={style.Temps}> Temperamento:
            {dog.Temperamentos? dog.Temperamentos.map((temp) => (
              <h5 className={style.temp} key={temp}>{temp}</h5>
              )):<div>Esta informacion no esta disponible </div>}
          </div>
        )}
        <button className={style.button} onClick={onclick}>▼</button>
      </div>
    </>
  );
}
