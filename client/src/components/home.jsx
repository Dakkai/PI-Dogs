import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs } from "../redux/actions";
import Dogs from "./Dogs";
import NavBar from "./NavBar";

export default function Home() {

  

  // Onclick ()=>{

  // }

  return (
    <div>
      <NavBar/>
       <Dogs /> 
    </div>
  );
}
