import { Route, Switch } from "react-router";
import React from "react";

import Home from "./components/home";


import Landing from "./components/landing/landing";
import CreateDog from "./components/CreateDog/CretateDog";
import DogDetail from "./components/Dogs/DogDetail";


function App() {
 

  return (
    <div className="App">
      <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/create" exact component={CreateDog} />
      <Route path='/Dog/:id' exact  component={DogDetail}/>
      {/* <Route path='*' exact  component={NotFound}/> */}

      </Switch>
    </div>
  );
}

export default App;
