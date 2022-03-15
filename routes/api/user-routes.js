const router = require('express').Router();
const{getAllUsers, getUserById, createUser, updateUser, deleteUser, addFriend, removeFriend} = require('../../controllers/user-controller');

// GET & POST at /api/Users
router
.route('/')
.get(getAllUsers)
.post(createUser);

// GET, PUT, & DELETE routes at /api/user/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports =router;