const express = require("express");
const router = express.Router();

const userController = require("../controllers/user-controller");

router.get("/users", userController.listUsers);
router.patch("/users/update-role", userController.updateRole);
router.delete("/users/:id", userController.deleteUser);

module.exports = router