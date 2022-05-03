import { Route } from "react-router";
import React from "react";
import { useDispatch } from "react-redux";
import Home from "./components/home";


import Landing from "./components/landing/landing";
import CreateDog from "./components/CretateDog";
import DogDetail from "./components/DogDetail";

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <Route path="/" exact component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/create" exact component={CreateDog} />
      <Route path='/Dog/:id'  component={DogDetail}/>
    </div>
  );
}

export default App;
