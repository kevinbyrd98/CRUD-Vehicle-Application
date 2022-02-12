using Microsoft.VisualStudio.TestTools.UnitTesting;
using BackendAPI.Repositories;
using System;
using BackendAPI.Models;
using System.Collections.Generic;
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
            
            InitializeDependencies();
            InitializeController();

            var vehicleList = new List<Vehicle> { 
                new Vehicle
                {
                    ID = 1
                },
                new Vehicle
                {
                    ID = 2
                }
            };
           
            _repository.Setup(repo => repo.GetVehicles()).Returns(vehicleList);

            var result = _controller.GetVehicles();

            var vehicles = (List<Vehicle>)((ObjectResult)result.Result).Value;

            Assert.AreEqual(vehicleList, vehicles);
        }

        [TestMethod()]
        public void GetVehicles_ShouldReturn500InternalServerError()
        {
            InitializeDependencies();
            InitializeController();

            _repository.Setup(repo => repo.GetVehicles()).Throws<Exception>();

            var result = _controller.GetVehicles();

            var actionResult = (ObjectResult)result.Result;
            Assert.AreEqual(StatusCodes.Status500InternalServerError, actionResult.StatusCode);
        }

        [TestMethod()]
        public void CreateVehicle_ShouldReturn201Created()
        {
            InitializeDependencies();
            InitializeController();

            _repository.Setup(repo => repo.CreateVehicle(It.IsAny<Vehicle>()));

            var result = _controller.CreateVehicle(new Vehicle());

            var actionResult = (OkResult)result.Result;

            Assert.AreEqual(StatusCodes.Status200OK, actionResult.StatusCode);
        }

        [TestMethod()]
        public void CreateVehicle_ShouldReturn400BadRequest()
        {
            InitializeDependencies();
            InitializeController();

            var result = _controller.CreateVehicle(null);

            var actionResult = (ObjectResult)result.Result;

            Assert.AreEqual(StatusCodes.Status400BadRequest, actionResult.StatusCode);
        }

        [TestMethod()]
        public void CreateVehicle_ShouldReturn500InternalServerError()
        {
            InitializeDependencies();
            InitializeController();

            _repository.Setup(repo => repo.CreateVehicle(It.IsAny<Vehicle>())).Throws<Exception>();

            var result = _controller.CreateVehicle(new Vehicle());

            var actionResult = (ObjectResult)result.Result;

            Assert.AreEqual(StatusCodes.Status500InternalServerError, actionResult.StatusCode);
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