import * as actions from './actionTypes';
import Vehicle from '../Model/Vehicle';
import VehicleDataService from '../service/vehicle.service';



export const vehicleAdded = (vehicle) => async (dispatch) => {
    try{
        const res = await VehicleDataService.create(vehicle);
        dispatch({
            type: actions.VEHICLE_ADDED,
            payload: res.data
        });
        return Promise.resolve(res.data);
    }catch (err){
        return Promise.reject(err);
    }
};

export const vehicleRemoved = (ID) => async (dispatch) => {
    try{
        const res = await VehicleDataService.delete(ID);

        dispatch({
            type: actions.VEHICLE_REMOVED,
            payload: {ID}
        });
    }catch (err){
        console.log(err);
    }
};


export const vehicleUpdated = (vehicle) => async (dispatch) =>{
    try{
        const res = await VehicleDataService.update(vehicle);

        dispatch({
            type: actions.VEHICLE_UPDATED,
            payload: vehicle
        });
        return Promise.resolve(res.data);
    }catch (err){
        return Promise.reject(err);
    }
};

export const retrieveVehicle = (ID) => async (dispatch) => {
    try{
        const res = await VehicleDataService.get(ID);

        dispatch({
            type: actions.VEHICLE_RETRIEVE,
            payload: res.data
        });

    }catch (err){
        console.log(err);
    }
};

export const retrieveVehicles = () => async (dispatch) => {
    try{
        const res = await VehicleDataService.getAll();
        dispatch({
            type: actions.VEHICLE_RETRIEVE_ALL,
            payload: res.data
        });
        
    }catch(err){
        console.log(err);
    }
};