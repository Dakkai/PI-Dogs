import React, { useState } from "react";

export default function DogCard(dog) {
  const [state, setState] = useState(false);
  dog = dog.dog;

  function onclick(e) {
    e.preventDefault();
    setState(!state);
  }
  return (
    <>
      <button onClick={onclick}>pressme</button>
      <div >
        {state &&
          dog.Temperamentos &&
          dog.Temperamentos.map((temp) => <span key={temp}>{temp}</span>)}
      </div>
    </>
  );
}
