const {Thought} = require('../models');

const thoughtController = {
    //Get all thoughts
    getAllThoughts(req, res){
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // get one thought by id
    getThoughtById({params}, res) {
        Thought.findOne({_id: params.id})
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({message: 'No Thought found with this id!'});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
    },

    // Create Thought
    createThought({body}, res){
        Thought.create(body)
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => res.status(400).json(err))
    },

    // update user by id
    updateThought({params, body}, res){
        Thought.findOneAndUpdate({_id: params.id}, body, {new: true})
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({message: "No Thought found with this id"});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete a user
    deleteThought({params}, res){
        Thought.findOneAndDelete({_id: params.id})
        .then(dbThoughtData => {
            if(!dbThoughtData){
                res.status(404).json({message: "No Thought found with this id"});
                return;
            }
            res.json(dbThoughtData);
        })
        .catch(err => res.status(400).json(err));
    }
}

module.exports = thoughtController;