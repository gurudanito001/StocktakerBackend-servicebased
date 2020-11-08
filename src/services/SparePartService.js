const SparePart = require("../models/SparePart");

function SparePartService() {
  return {
    list: () => SparePart.find(),
    add: data => new SparePart(data).save(),
    delete: id => SparePart.findByIdAndRemove(id),
    update: (id, newData) => SparePart.findByIdAndUpdate(id, newData, 
      function (err, docs) { 
        if (err){ 
            console.log(err) 
        } 
        else{ 
            console.log("Updated SparePart : ", docs); 
        } 
      }),
    get: id => SparePart.findById(id),
  };
}

module.exports = SparePartService();
