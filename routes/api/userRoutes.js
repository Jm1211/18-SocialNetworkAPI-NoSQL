const router = require('express').Router();

const {
    getAllUsers,
  getUserById,
  CreateUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/usercontroller');

router.route('/').get(getAllUsers).post(CreateUser);

router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;