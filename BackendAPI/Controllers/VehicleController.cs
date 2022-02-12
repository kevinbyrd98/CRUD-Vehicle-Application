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
        public async Task<ActionResult> GetVehicle(int vehicleId)
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
        public async Task<ActionResult> GetVehicles()
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
        public async Task<ActionResult> CreateVehicle(Vehicle vehicle)
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
        
        /*
        [HttpPut]
        public Task<ActionResult> UpdateVehicle()
        {

        }

        [HttpDelete]
        public Task<ActionResult> DeleteVehicle()
        {

        }*/
    }
}
