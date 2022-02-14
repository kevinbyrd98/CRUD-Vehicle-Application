import React, { Component } from "react";
import { connect } from "react-redux";
import { vehicleAdded } from "../actions/actions";
import Vehicle from "../Model/Vehicle";
class AddVehicle extends Component {
    constructor(props) {
        super(props);
        this.onChangeMake = this.onChangeMake.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.saveVehicle = this.saveVehicle.bind(this);
        this.newVehicle = this.newVehicle.bind(this);
        this.state = {
            ID: null,
            Make: "",
            Model: "",
            Year: parseInt('0000', 8),
        };
    }

    onChangeMake(e){
        this.setState({
            Make: e.target.value,
        });
    }

    onChangeModel(e){
        this.setState({
            Model: e.target.value,
        });
    }

    onChangeYear(e){
        this.setState({
            Year: e.target.value,
        });
    }

    saveVehicle(){
        const { Model, Make, Year} = this.state;
        let vehicle = {Make, Model, Year};
        this.props.AddVehicle(vehicle).then((data) => {
            this.setState({
                ID: data.ID,
                Make: data.Make,
                Model: data.Model,
                Year: data.Year,
            });
        })
        .catch((e) =>{
            console.log(e);
        })
    }

    newVehicle(){
        this.setState({
            ID: null,
            Make: "",
            Model: "",
            Year: parseInt('0000', 8)
        });
    }

    render(){
        return(
        <div className="submit-form">
            {this.state.submitted ? (
            <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={this.newVehicle}>
                Add
                </button>
            </div>
            ) : (
            <div>
                <div className="form-group">
                <label htmlFor="make">Make</label>
                <input
                    type="text"
                    className="form-control"
                    id="make"
                    required
                    value={this.state.Make}
                    onChange={this.onChangeMake}
                    name="make"
                />
                </div>
                <div className="form-group">
                <label htmlFor="model">Model</label>
                <input
                    type="text"
                    className="form-control"
                    id="model"
                    required
                    value={this.state.Model}
                    onChange={this.onChangeModel}
                    name="model"
                />
                </div>
                <div className="form-group">
                <label htmlFor="year">Year</label>
                <input
                    type="text"
                    className="form-control"
                    id="year"
                    required
                    value={this.state.Year}
                    onChange={this.onChangeYear}
                    name="year"
                />
                </div>
                <button onClick={this.saveVehicle} className="btn btn-success">
                Submit
                </button>
            </div>
            )}
        </div>
        );
    }
}
export default connect(null, { vehicleAdded })(AddVehicle);