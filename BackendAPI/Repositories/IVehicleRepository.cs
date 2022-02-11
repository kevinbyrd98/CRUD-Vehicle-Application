using BackendAPI.Models;

namespace BackendAPI.Repositories
{
    public interface IVehicleRepository
    {
        public Vehicle GetById(int id);
    }
}