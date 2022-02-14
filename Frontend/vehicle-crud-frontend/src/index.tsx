import store from './store';
import { vehicleAdded, vehicleRemoved, vehicleUpdated } from './actions/actions';
import Vehicle from './Model/Vehicle';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';


const unsubscribe = store.subscribe(() => {
  console.log("Store changed", store.getState());
});


const vehicle = {
  ID: 1,
  Make: "Honda",
  Model: "Civic",
  Year: 2015
}

store.dispatch(vehicleAdded(vehicle));

vehicle.Model = "Accord";

store.dispatch(vehicleUpdated(vehicle));

unsubscribe();


console.log(store.getState());


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
