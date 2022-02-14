import * as actions from './actions/actionTypes';

let lastId = 0;

export default function reducer(state = [], action){
    if (action.type === actions.VEHICLE_ADDED)
        return [
            ...state,
            {
                ID: ++lastId,
                Model: action.payload.Model,
                Make: action.payload.Make,
                Year: action.payload.Year
            }
        ];
    else if(action.type === actions.VEHICLE_REMOVED)
        return state.filter(vehicel => vehicel.ID !== action.payload.ID)

    else if(action.type === actions.VEHICLE_UPDATED)
        return state.map(vehicle => vehicle.ID !== action.payload.ID ? vehicle : {...vehicle, Make: action.payload.Make, Model: action.payload.Model, Year: action.payload.Year});

    return state;
}