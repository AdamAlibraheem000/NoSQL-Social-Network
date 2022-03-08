const router = require('express').Router();
const{getAllThoughts, getThoughtById, createThought, updateThought, deleteThought} = require('../../controllers/Thought-controller');

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



module.exports = router;
