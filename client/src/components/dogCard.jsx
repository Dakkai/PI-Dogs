import React, { useState } from "react";

export default function DogCard(key,img,name,pesoMax,pesoMin,temperamentos) {
    return <div key={key}>

        <h2>{name}</h2>
        <div width="10px" height="20px">
        <img src={img} alt="not found" />
        </div>
        <h4>{pesoMax}</h4>
        <h4>{pesoMin}</h4>
        {/* <temperamento/>*/}
    </div>
}
