import http from "../http-common";
import Vehicle from "../Model/Vehicle";

class VehicleDataService {
    getAll(){
        return http.get("/getVehicles");
    }
    get(id){
        return http.get(`/getVehicle${id}`);
    }
    create(data){
        return http.post("/createVehicle", data);
    }

    update(data){
        return http.put("/updateVehicle", data);
    }

    delete(id){
        return http.delete(`deleteVehicle${id}`);
    }
}

export default new VehicleDataService();