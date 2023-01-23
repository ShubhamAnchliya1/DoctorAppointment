const express =  require("express");
const router = express.Router();

const { register  } = require("../controller/userController.js");


// router.route("/signup").post(register);
router.post("/signup",register);

module.exports = router;