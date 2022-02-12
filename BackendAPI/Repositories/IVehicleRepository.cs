using BackendAPI.Models;
using System.Collections.Generic;

namespace BackendAPI.Repositories
{
    public interface IVehicleRepository
    {
        public Vehicle GetById(int id);
        public List<Vehicle> GetVehicles();
        public void CreateVehicle(Vehicle vehicle);
    }
}