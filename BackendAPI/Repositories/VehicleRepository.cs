using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackendAPI.Models;

namespace BackendAPI.Repositories
{
    public class VehicleRepository : IVehicleRepository
    {
        public List<Vehicle> vehicles { get; set; }

        public Vehicle GetById(int id)
        {
            try
            {
                var vehicle = vehicles.Find(v => v.ID == id);
                
                return vehicle;

            }catch(Exception e)
            {
                throw e;
            }
        }

        public List<Vehicle> GetVehicles()
        {
            return vehicles;
        }

        public void CreateVehicle(Vehicle vehicle)
        {
            try
            {
                vehicles.Add(vehicle);
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public void UpdateVehicle(Vehicle vehicle, Vehicle vehicleToUpdate)
        {
            var index = vehicles.IndexOf(vehicleToUpdate);

            vehicles[index] = vehicle;
        }

        public void DeleteVehicle(int Id)
        {
            vehicles = vehicles.Where(v => v.ID != Id).ToList();
        }
    }
}
