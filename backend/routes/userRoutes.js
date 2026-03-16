const express = require("express");

const router = express.Router();

const {

addUser,
getUsers

} = require("../controllers/userController");



router.post("/add",addUser);

router.get("/all",getUsers);



module.exports = router;