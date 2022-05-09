import react from "react";
import { Link } from "react-router-dom";
import img from "../../imgs/landing2.png";
import flecha from "../../imgs/right-arrow.png";
import style from "./landing.module.css";

export default function Landing() {
  return (
    <>
      <div className={style.all_Page_div}>
        <div id={style.img_div}>
        <img id={style.img} src={img} alt="alt" />
        </div>
        <div id={style.tittle_Div}>
          <h1> Dokipedia </h1>
        </div>
        <div id={style.Button_Div}>
          <Link to="/home">
            <button id={style.Button}>
              <img id={style.img_btn} src={flecha} alt="" />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
