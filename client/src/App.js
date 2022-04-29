import { Route, Switch } from "react-router";
import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import Home from "./components/home";
import { getDogs } from "../src/redux/actions/";

import Landing from "./components/landing";

function App() {
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Henry Dogs</h1>

      <Route path="/" exact component={Landing} />
      <Route path="/home" component={Home} />
      <Route path="/create" exact component={Home} />
      <Route path="/a" exact component={Home} />
    </div>
  );
}

export default App;
