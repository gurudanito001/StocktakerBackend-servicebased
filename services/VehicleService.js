const Vehicle = require("../models/Vehicle");

function VehicleService() {
  return {
    list: () => Vehicle.find(),
    add: data => new Vehicle(data).save(),
    delete: id => Vehicle.findByIdAndRemove(id),
    update: (id, newData) => Vehicle.findByIdAndUpdate(id, newData, 
      function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Updated Vehicle : ", docs); 
        } 
      }),
    get: id => Vehicle.findById(id),
  };
}

module.exports = VehicleService();
