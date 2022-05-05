import React from "react";
import activePAG from "../imgs/bx-radio-circle-marked.png"
import NotActivePAG from "../imgs/bx-radio-circle.png"

export default function Paginado({dogs, DogsPerPage, paginas,CurrentPage}) {

  let pages = [];
  console.log()
  for (let i = 1; i <= (dogs.length / DogsPerPage); i++) {
    pages.push(i);
  }
  return (
    <>
        <ul style={{display: "flex", justifyContent: "space-evenly", margin: "0px"}}>
            {pages&&pages.map(page=><li style={{display:"flex"}}>
                
                <a onClick={()=>{paginas(page)}} ><img src={CurrentPage === page?activePAG:NotActivePAG} alt="pages" /></a>
            </li>)}
        </ul>
    
    </>
  );
}
