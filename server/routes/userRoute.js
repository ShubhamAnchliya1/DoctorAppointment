const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getUserDetails,
} = require("../controller/userController.js");
const { isAuthenticatedUser } = require("../middlewares/authMiddlewares.js");

// router.route("/signup").post(register);
router.post("/signup", register);
router.post("/login", login);
router.get("/userdetails", isAuthenticatedUser, getUserDetails);

module.exports = router;
