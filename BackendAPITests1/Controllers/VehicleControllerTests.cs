using Microsoft.VisualStudio.TestTools.UnitTesting;
using BackendAPI.Controllers;
using BackendAPI.Repositories;
using System;
using BackendAPI.Models;
using System.Collections.Generic;
using System.Text;
using Moq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace BackendAPI.Controllers.Tests
{
    [TestClass()]
    public class VehicleControllerTests
    {
        private VehicleController _controller;
        private Mock<IVehicleRepository> _repository;

        [TestMethod()]
        public void GetVehicle_ShouldReturn200OK()
        {
            var vehicleTest = new Vehicle
            {
                ID = 1,
                Make = "Honda",
                Model = "",
                Year = 1999
            };
            InitializeDependencies();
            _repository.Setup(repo => repo.GetById(1)).Returns(vehicleTest);
            InitializeController();

            var result = _controller.GetVehicle(1);

            var vehicleResult = (Vehicle)((ObjectResult)result.Result).Value;
            Assert.AreEqual(vehicleTest, vehicleResult);
        }

        [TestMethod()]
        public void GetVehicle_ShouldReturn400BadRequest()
        {
            InitializeDependencies();

            InitializeController();

            var result = _controller.GetVehicle(-1);

            var actionResult = (ObjectResult)result.Result;

            Assert.AreEqual(StatusCodes.Status400BadRequest, actionResult.StatusCode);
        }

        [TestMethod()]
        public void GetVehicle_ShouldReturn500InternalServerError()
        {
            InitializeDependencies();
            InitializeController();

            _repository.Setup(repo => repo.GetById(1)).Throws<Exception>();

            var result = _controller.GetVehicle(1);

            var actionResult = (ObjectResult)result.Result;

            Assert.AreEqual(StatusCodes.Status500InternalServerError, actionResult.StatusCode);
        }

        [TestMethod()]
        public void GetVehicles_ShouldReturn200OK()
        {
            InitializeController();
            InitializeDependencies();

            var vehicles = []
        }

        private void InitializeController()
        {
            _controller = new VehicleController(_repository.Object);
        }

        public void InitializeDependencies()
        {
            _repository = new Mock<IVehicleRepository>();
        }
    }
}