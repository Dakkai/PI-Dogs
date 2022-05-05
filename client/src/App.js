import { Route } from "react-router";
import React from "react";

import Home from "./components/home";


import Landing from "./components/landing/landing";
import CreateDog from "./components/CretateDog";
import DogDetail from "./components/Dogs/DogDetail";
import NavBar from "./components/Nav_SearchBar/NavBar";

function App() {
 

  return (
    <div className="App">
      <Route path="/" exact component={Landing} />
      <Route path="/home"  component={NavBar} />
      <Route path="/home" exact component={Home} />
      <Route path="/create" exact component={CreateDog} />
      <Route path='/Dog/:id'  component={DogDetail}/>
    </div>
  );
}

export default App;
