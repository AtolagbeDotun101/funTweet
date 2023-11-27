import express from "express";
const router = express.Router();

const { allUser, createUser, singleUser, updateUser, deleteUser } = require ("../controller/userController")

router.post("/", createUser);
router.get("/", allUser);
router.get('/:id', singleUser)
router.put('/:id', updateUser)
router.delete("/id",deleteUser)

module.exports = router;
