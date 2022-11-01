const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

//@route GET && POST
router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost);
router.route("/:id").get(postControllers.getPostById);

//delete
router.route("/:id").delete(postControllers.deletePostById);
router.route("/:id").put(postControllers.changePostById);

module.exports = router;
