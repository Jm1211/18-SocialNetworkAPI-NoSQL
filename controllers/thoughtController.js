const {Thoughts,User} = require('../models');

module.exports = {
    //GET all thoughts
    getAllThoughts(req,res) {
        Thoughts.find()
        .select('-__v')
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    //GET single thought by id
    getSingleThought(req,res) {
        Thoughts.findOne({_id: req.params.thoughtId})
        .then((thought) => 
        !thoughts
        ? res.status(404).json({ message: 'No thought was found with that ID'})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    //POST to create new thought
    createThought(req,res) {
        Thoughts.create(req.body)
        .then((thought) => {
            return User.findOneAndUpdate(
                {_id: req.body.userId },
                { $addToSet: {thoughts: thought.id}}
            );
        })
        .then((user) => 
        !user
        ? res.status(404).json({
            message: 'Thought created, no user found with that ID',
        })
        : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
    //PUT to update thought by id
    updateThought(req,res) {
        Thoughts.findOneAndUpdate (
            {_id: req.params.thoughtId},
            {thoughtText: req.body.thoughtText}
        )
        .then((thought) =>
        !thought
        ? res.status(404).json({ message: 'No thought found with this id'})
        : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    //DELETE to remove a thought by id 
    deleteThought(req,res) {
        Thoughts.findOneAndDelete({ _id: req.params.thoughtId})
        .then((thought) =>
        !thought
            ? res.status(404).json({ message: 'No thought found with that id'})
            : User.findByIdAndUpdate(
             {thoughts: req.params.thoughtId},
                { $pull: {thoughts: req.params.thoughtId}}
            )
        )
        .then((user) => 
        
        !user
            ? res.status(404).json({
                message: "Thought deleted"
            })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    //POST to create reaction 
    addReaction(req, res) {
        Thoughts.findOneAndUpdate(
          { _id: req.params.thoughtId },
          { $addToSet: { reactions: req.body } }
        )
          .then((thought) =>
            !thought
              ? res.status(404).json({ message: "No thought found with this id!" })
              : res.json(thought)
          )
          .catch((err) => res.status(500).json(err));
      },
      //DELETE to pull and remove reaction by id
      deleteReaction(req,res) {
        Thoughts.findOneAndUpdate(
            {_id: req.params.thoughtId},
            { $pull: {reactions: {_id: req.params.reactionId}}}
        )
        .then((thought) =>
        !thought
            ? res.status(404).json({ message: 'No thought found with this id'})
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err)); 

      },
};
