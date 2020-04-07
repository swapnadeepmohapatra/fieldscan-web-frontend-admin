import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import ViewPlaces from "./Routes/ViewPlaces";
import ViewUsers from "./Routes/ViewUsers";
import ViewPlaceVisits from "./Routes/ViewPlaceVisits";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/admin/places" exact component={ViewPlaces} />
        <Route path="/admin/users" exact component={ViewUsers} />
        <Route
          path="/admin/places/visits/:_id"
          exact
          component={ViewPlaceVisits}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
