import * as actions from './actions/actionTypes';

let lastId = 0;

export default function reducer(state = [], action){
    switch (action.type){
        case actions.VEHICLE_ADDED:
            return [
                ...state,
                {
                    ID: ++lastId,
                    Model: action.payload.Model,
                    Make: action.payload.Make,
                    Year: action.payload.Year
                }
            ];
        case actions.VEHICLE_REMOVED:
            return state.filter(vehicel => vehicel.ID !== action.payload.ID)
        case actions.VEHICLE_UPDATED:
            return state.map(vehicle => vehicle.ID !== action.payload.ID ? vehicle : {...vehicle, Make: action.payload.Make, Model: action.payload.Model, Year: action.payload.Year});
        case actions.VEHICLE_RETRIEVE:
            return action.payload;
        default:
            return state;
    }
}