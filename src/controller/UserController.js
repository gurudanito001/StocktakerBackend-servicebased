const User = require("./../services/UserService");

function UserController() {
  const listUsers = async function(req, res) {
    let data = await User.list();
    if(data.err){
      res.json(`err: ${data.err}`)
    }else{
      res.json(data)
    }
  };

  const addUser = async function(req, res) {
    let data = await  User.add(req.body);
    if(data){
      res.json(data)
    }else{
      res.json("Error")
    }
    //User.add(req.body).then(data => res.json(data));
  };

  const deleteUser = async function(req, res) {
    let data = await  User.delete(req.params.id);
    if(data){
      res.json("User Account Deleted")
    }else{
      res.json("Error")
    }
    //User.delete(req.params.id).then((data) => res.json(data));
  };

  const updateUser = async function(req, res) {
    let data = await User.update(req.params.id, req.body);
    if(data){
      res.json(data)
    }else{
      res.json("Error")
    }
    //User.update(req.params.id, req.body).then(data => res.json(data));
  }

  const getUser = async function(req, res) {
    let data = await User.getUser(req.params.id);
    if(data){
      res.json(data)
    }else{
      res.json("Error")
    }
    //User.getUser(req.params.id).then(data => res.json(data)) 
  }

  const findEmail = async function(req, res) {
    let data = await User.findEmail(req.params.email);
    data ? res.json(true) : res.json(false)
    
      /* User.findEmail(req.params.email).then(data =>{
        data ? res.json(true) : res.json(false)
      }) */
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
