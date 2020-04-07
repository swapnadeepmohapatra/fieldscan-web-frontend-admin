import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import ViewPlaces from "./Routes/ViewPlaces";
import ViewUsers from "./Routes/ViewUsers";
import ViewVisits from "./Routes/ViewVisits";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/admin/places" exact component={ViewPlaces} />
        <Route path="/admin/users" exact component={ViewUsers} />
        <Route path="/admin/visits" exact component={ViewVisits} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
