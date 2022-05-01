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
    <><nav>
        <ul>
            {pages&&pages.map(page=><li>
                
                <a onClick={()=>{paginas(page)}} ><img src={CurrentPage === page?activePAG:NotActivePAG} alt="" />{page}</a>
            </li>)}
        </ul>
    </nav>
    </>
  );
}
