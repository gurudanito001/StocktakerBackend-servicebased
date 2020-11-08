const SparePart = require("./../services/SparePartService");

function SparePartController() {
  const listSpareParts = function(req, res) {
    SparePart.list().then(data => res.json(data));
  };

  const addSparePart = function(req, res) {
    SparePart.add(req.body).then(data => res.json(data));
  };

  const deleteSparePart = function(req, res) {
    SparePart.delete(req.params.id).then(() => res.json("Spare Part Deleted"));
  };

  const updateSparePart = function(req, res) {
    SparePart.update(req.params.id, req.body).then(data => res.json(data));
  }

  const getSparePart = function(req, res) {
    SparePart.get(req.params.id).then(data => res.json(data)) 
  }

  return {
    list: listSpareParts,
    add: addSparePart,
    delete: deleteSparePart,
    update: updateSparePart,
    get: getSparePart,
  };
}

module.exports = SparePartController();

