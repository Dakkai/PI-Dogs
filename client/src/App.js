import { Route } from "react-router";
import React from "react";
import { useDispatch } from "react-redux";
import Home from "./components/home";


import Landing from "./components/landing";
import CreateDog from "./components/CretateDog";

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Henry Dogs</h1>

      <Route path="/" exact component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/create" exact component={CreateDog} />
    </div>
  );
}

export default App;
