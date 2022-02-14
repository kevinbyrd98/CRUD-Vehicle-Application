import { render } from "@testing-library/react";
import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveVehicle,  retrieveVehicles} from "../actions/actions";
import Vehicle from "../Model/Vehicle";

class VehicleList extends Component {
    constructor(props) {
      super(props);
      this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
      this.setActiveVehicle = this.setActiveVehicle.bind(this);
      this.refreshData = this.refreshData.bind(this);
      this.state = {
        currentVehicle: null,
        currentIndex: -1,
        searchTitle: "",
      }
    };

    componentDidMount(){
      this.props.retrieveVehicles();
    }


    onChangeSearchTitle(e){
      const searchTitle = e.target.value;
      this.setState({
        searchTitle: searchTitle,
      });
    }

    refreshData() {
      this.setState({
        currentVehicle: null,
        currentIndex: -1,
      });
    }

    setActiveVehicle(vehicle, index){
      this.setState({
        currentVehicle: vehicle,
        currentIndex: index,
      });
    }

    render(){
      const { searchTitle, currentVehicle, currentIndex} = this.state;
      const { vehicles } = this.props;
      return (
        <div className="list row">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search For Vehicle"
                value={searchTitle}
                onChange={this.onChangeSearchTitle} 
              />
              <div className="input-group-append">
                <button 
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.findByCriteria}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h4>Vehicle List</h4>
            <ul className="list-group">
              {vehicles &&
              vehicles.map((vehicle, index) => (
                <li className={
                  "list-group-item" + 
                  (index === currentIndex ? "active" : "")
                }
                onClick={() => this.setActiveVehicle(vehicle, index)}
                key={index}
                >
                  Vehicle {vehicle.ID}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            {currentVehicle ? (
              <div>
                <h4>Vehicle</h4>
                <div>
                  {currentVehicle.Make, currentVehicle.Model, currentVehicle.Year}
                </div>
              </div>
            ): (
              <div>
                <br />
                <p>PLease click on a vehicle...</p>
              </div>
            )}
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles,
  };
};

export default connect(mapStateToProps, {retrieveVehicles, retrieveVehicle})(VehicleList);

