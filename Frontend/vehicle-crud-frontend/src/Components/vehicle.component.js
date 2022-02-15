import React, { Component } from "react";
import { connect } from "react-redux";
import { vehicleUpdated, vehicleRemoved } from "../actions/actions";
import VehicleDataService from "../service/vehicle.service";
class Vehicle extends Component{
    constructor(props){
        super(props);
        this.onChangeMake = this.onChangeMake.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.updateContent = this.updateContent.bind(this);
        this.removeVehicle = this.removeVehicle.bind(this);
        this.state = {
            currentVehicle: {
                ID: null,
                Make: "",
                Model: "",
                Year: parseInt('0000', 8),
            },
            message: "",
        };
    }

    componentDidMount(){
        this.getVehicle(this.props.match.params.ID);
    }

    onChangeMake(e){
        const Make = e.target.value;
        this.setState(function (prevState){
            return{
                currentVehicle: {
                    ...prevState.currentVehicle,
                    Make: Make,
                },
            };
        });
    }

    onChangeModel(e){
        const Model = e.target.value;
        this.setState(function (prevState){
            return{
                currentVehicle: {
                    ...prevState.currentVehicle,
                    Model: Model,
                },
            };
        });
    }

    onChangeYear(e){
        const Year = e.target.value;
        this.setState(function (prevState){
            return{
                currentVehicle: {
                    ...prevState.currentVehicle,
                    Year: Year,
                },
            };
        });
    }

    getVehicle(ID){
        VehicleDataService.get(ID)
        .then((response) => {
            this.setState({
                currentVehicle: response.data,
            });
            console.log(response.data);
        })
        .catch((e) => {
            console.log(e);
        });
    }
    updateContent() {
        this.props
          .updateVehicle(this.state.currentVehicle.id, this.state.currentVehicle)
          .then((reponse) => {
            console.log(reponse);
            
            this.setState({ message: "The vehicle was updated successfully!" });
          })
          .catch((e) => {
            console.log(e);
          });
      }

    removeVehicle(){
        this.props
        .vehicleRemoved(this.state.currentVehicle.ID)
        .then(() => {
            this.props.history.push("/vehicles");
        })
        .catch((e) => {
            console.log(e);
        });
    }

    render() {
        const { currentVehicle } = this.state;
        return (
          <div>
            {currentVehicle ? (
              <div className="edit-form">
                <h4>Vehicle</h4>
                <form>
                  <div className="form-group">
                    <label htmlFor="make">Make</label>
                    <input
                      type="make"
                      className="form-control"
                      id="make"
                      value={currentVehicle.Make}
                      onChange={this.onChangeMake}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input
                      type="model"
                      className="form-control"
                      id="model"
                      value={currentVehicle.Model}
                      onChange={this.onChangeModel}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input
                      type="year"
                      className="form-control"
                      id="year"
                      value={currentVehicle.Year}
                      onChange={this.onChangeYear}
                    />
                  </div>
                </form>
                <button
                  className="badge badge-danger mr-2"
                  onClick={this.removeVehicle}
                >
                  Delete
                </button>
                <button
                  type="submit"
                  className="badge badge-success"
                  onClick={this.updateContent}
                >
                  Update
                </button>
                <p>{this.state.message}</p>
              </div>
            ) : (
              <div>
                <br />
                <p>Please click on a Vehicle...</p>
              </div>
            )}
          </div>
        );
   }

}

export default connect(null, { vehicleUpdated, vehicleRemoved })(Vehicle);