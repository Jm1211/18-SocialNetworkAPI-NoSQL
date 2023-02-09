const router = require('express').Router();
const{
    getAllThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

//route /api/thoughts to get all thoughts and create a new one
router.route('/').get(getAllThoughts).post(createThought);

//route /:thoughtID will get single thought, put single thought, and delete
router
    .route("/:thoughtId")
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// post (create) new reaction
router.route('/:thoughtId/reactions').post(addReaction);

//deletes specific reaction with id
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;