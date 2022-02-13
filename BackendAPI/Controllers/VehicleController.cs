using BackendAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BackendAPI.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VehicleController : ControllerBase
    {
        private readonly IVehicleRepository _vehicleRepository;

        public VehicleController(IVehicleRepository vehicleRepository)
        {
            _vehicleRepository = vehicleRepository;
        }

        [HttpGet]
        public ActionResult GetVehicle(int vehicleId)
        {
            if (vehicleId <= 0)
                return BadRequest("Valid vehicle Id not provided");
            try
            {
                var vehicle = _vehicleRepository.GetById(vehicleId);

                return Ok(vehicle);
            }catch 
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occured while retriveing vehicle");
            }
        }

        [HttpGet]
        public ActionResult GetVehicles()
        {
            try
            {
                var vehicles = _vehicleRepository.GetVehicles();

                return Ok(vehicles);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occured while retriveing vehicles");
            }
        }
        
        [HttpPost]
        public ActionResult CreateVehicle(Vehicle vehicle)
        {
            if (vehicle is null)
                return BadRequest("No vehicle was provided");

            try
            {
                _vehicleRepository.CreateVehicle(vehicle);

                return Ok();
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occured while adding this vehicle");
            }
        }
        
        
        [HttpPut]
        public ActionResult UpdateVehicle(Vehicle vehicle)
        {
            if(vehicle is null)
                return BadRequest("No vehicle provided");

            try
            {
                var vehicleToUpdate = _vehicleRepository.GetById(vehicle.ID);

                _vehicleRepository.UpdateVehicle(vehicle, vehicleToUpdate);

                return Ok();
            }catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error has occured while updating vehicle");
            }
        }


        [HttpDelete]
        public ActionResult DeleteVehicle(int ID)
        {
            if (ID <= 0)
                return BadRequest("Invalid vehicle ID");
            try
            {
                _vehicleRepository.DeleteVehicle(ID);

                return Ok();
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "An error occured while deleting vehicle");
            }
        }
    }
}
