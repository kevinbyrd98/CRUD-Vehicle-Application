import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import VehicleList from './Components/VehicleList';
import AddVehicle from "./Components/AddVehicle";
import Vehicle from "./Components/vehicle.component";

class App extends Component{
  render (){
    return(
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/vehicles"} className="navbar-brand">
            Kevin Byrd
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Vehicle
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/vehicles"]} component={VehicleList} />
            <Route exact path="/add" component={AddVehicle} />
            <Route exact path="/vehicles/:ID" component={Vehicle} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
