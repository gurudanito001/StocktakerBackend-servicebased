const User = require("./../services/UserService");

function UserController() {
  const listUsers = function(req, res) {
    User.list().then(data => res.json(data));
  };

  const addUser = function(req, res) {
    User.add(req.body).then(data => res.json(data));
  };

  const deleteUser = function(req, res) {
    User.delete(req.params.id).then(() => res.json("User Account Deleted"));
  };

  const updateUser = function(req, res) {
    User.update(req.params.id, req.body).then(data => res.json(data));
  }

  const getUser = function(req, res) {
    User.getUser(req.params.id).then(data => res.json(data)) 
  }

  const findEmail = function(req, res) {
      User.findEmail(req.params.email).then(data =>{
        data ? res.json(true) : res.json(false)
      })
  }

  return {
    list: listUsers,
    add: addUser,
    delete: deleteUser,
    update: updateUser,
    getUser: getUser,
    findEmail: findEmail
  };
}

module.exports = UserController();
