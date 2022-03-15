const router = require('express').Router();
const{getAllThoughts, getThoughtById, createThought, updateThought, deleteThought, addReaction, removeReaction} = require('../../controllers/Thought-controller');

// GET & POST at /api/Thoughts
router
.route('/')
.get(getAllThoughts)
.post(createThought);

// GET, PUT, & DELETE routes at /api/Thought/:id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(removeReaction);




module.exports = router;
