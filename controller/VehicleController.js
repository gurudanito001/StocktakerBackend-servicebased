const Vehicle = require("./../services/VehicleService");

function VehicleController() {
  const listVehicles = function(req, res) {
    Vehicle.list().then(data => res.json(data));
  };

  const addVehicle = function(req, res) {
    Vehicle.add(req.body).then(data => res.json(data));
  };

  const deleteVehicle = function(req, res) {
    Vehicle.delete(req.params.id).then(() => res.json("Vehicle Deleted"));
  };

  const updateVehicle = function(req, res) {
    Vehicle.update(req.params.id, req.body).then(data => res.json(data));
  }

  const getVehicle = function(req, res) {
    Vehicle.get(req.params.id).then(data => res.json(data)) 
  }

  return {
    list: listVehicles,
    add: addVehicle,
    delete: deleteVehicle   ,
    update: updateVehicle,
    get: getVehicle,
  };
}

module.exports = VehicleController();
