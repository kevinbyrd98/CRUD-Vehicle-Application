import * as actions from './actionTypes';
import Vehicle from '../Model/Vehicle';

export function vehicleAdded(vehicle: Vehicle){
    const {Make, Model, Year} = vehicle;
    
    return {
        type: actions.VEHICLE_ADDED,
        payload: {
          Model,
          Make,
          Year
        }
    };
}

export function vehicleRemoved(ID: number){
    return {
        type: actions.VEHICLE_REMOVED,
        payload: {
          ID
        }
    }
}

export function vehicleUpdated(vehicle: Vehicle){
    const {ID, Make, Model, Year} = vehicle;
    
    return {
        type: actions.VEHICLE_UPDATED,
        payload: {
            ID,
            Make,
            Model,
            Year
        }
    }
}