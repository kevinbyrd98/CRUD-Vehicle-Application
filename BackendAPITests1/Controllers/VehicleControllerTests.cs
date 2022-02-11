using Microsoft.VisualStudio.TestTools.UnitTesting;
using BackendAPI.Controllers;
using BackendAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using Moq;

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
            _repository.Setup(repo => repo.GetById(1)).Returns(new Models.Vehicle());
        }
    }
}