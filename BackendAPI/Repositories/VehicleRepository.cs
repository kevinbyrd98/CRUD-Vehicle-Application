using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BackendAPI.Models;

namespace BackendAPI.Repositories
{
    public class VehicleRepository : IVehicleRepository
    {
        public Vehicle[] vehicles { get; set; }

        public Vehicle GetById(int id)
        {
            try
            {
                var vehicle = Array.Find(vehicles, vehicle => vehicle.ID == id);
                
                return vehicle;

            }catch(Exception e)
            {
                throw e;
            }
        }
    }
}
