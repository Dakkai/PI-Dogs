import react from "react";
import { Link } from "react-router-dom";
import img from "../imgs/landing.png";
export default function Landing() {
  return (
    <>
      <div className="landing">
        <h1>PAGINA</h1>
        <img src={img} alt="alt" />
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto esse,{" "}
        </span>
        <Link to="/home">
          <button />
        </Link>
      </div>
    </>
  );
}
