const {User,Thoughts} = require('../models')

module.exports = {
    //GET all users
    getAllUsers(req,res) {
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },
    //GET single user by _id
    getSingleUser(req,res) {
        User.findOne({ _id: req.params.userId })
            .then((user) => 
            !user
                ? res.status(404).json({ message: 'No user found with that id'})
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    //POST new user
    createUser(req,res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },
    //PUT to update an existing user by _id
    updateUser(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { username: req.body.username },
          { email: req.body.email}
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: "No user with this id!" })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
    
      // DELETE user by its _id
      deleteUser(req, res) {
        User.findOneAndDelete({ _id: req.params.userId })
          .then((user) =>
            !user
              ? res.status(404).json({ message: "No user with that ID" })
              : res.json({ message: "User successfully deleted" })
          )
          .catch((err) => res.status(500).json(err));
      },
    
      // POST (add) a friend to a user
      addFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.params.friendId } }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: "No user with this id!" })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
    
      // DELETE a friend from a user
      deleteFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: req.params.friendId } }
        )
          .then((user) =>
            !user
              ? res.status(404).json({ message: "No user with this id!" })
              : res.json(user)
          )
          .catch((err) => res.status(500).json(err));
      },
}