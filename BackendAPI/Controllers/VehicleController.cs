using Microsoft.AspNetCore.Mvc;
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
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<VehicleController> _logger;

        public VehicleController(ILogger<VehicleController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public Task<ActionResult<VehicleDto>> GetVehicle(int vehicleId)
        {
            if (vehicleId <= 0)
                return BadRequest("A valid vehicle ID was not provided");
        }

        [HttpGet]
        public Task<ActionResult> GetVehicles()
        {

        }

        [HttpPost]
        public Task<ActionResult> CreateVehicle()
        {

        }

        [HttpPut]
        public Task<ActionResult> UpdateVehicle()
        {

        }

        [HttpDelete]
        public Task<ActionResult> DeleteVehicle()
        {

        }
    }
}
