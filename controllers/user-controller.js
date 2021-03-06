const {User} = require('../models');

const userController = {
    //Get all users
    getAllUsers(req, res){
        User.find({})
        .populate({path:'friends', select:"-__v"})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // get one user by id
    getUserById({params}, res) {
        User.findOne({_id: params.id})
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({message: 'No pizza found with this id!'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // Create User
    createUser({body}, res){
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.status(400).json(err))
    },

    // update user by id
    updateUser({params, body}, res){
        User.findOneAndUpdate({_id: params.id}, body, {new: true})
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({message: "No user found with this id"});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete a user
    deleteUser({params}, res){
        User.findOneAndDelete({_id: params.id})
        .then(dbUserData => {
            if(!dbUserData){
                res.status(404).json({message: "No pizza found with this id"});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    addFriend({params, body}, res){
        User.findOneAndUpdate(
            {_id: params.userId},
            {$push: {friends: {_id:params.friendId}}},
            {new: true}
        )
        .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No User found with this id!' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.json(err));
        
    },

    removeFriend({ params }, res) {
        User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { friends: { _id: params.friendId } } },
          { new: true }
        )
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.json(err));
      },


}

module.exports = userController;