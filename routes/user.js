const express=require("express");
const router=express.Router();

const userController = require("../controllers/userCont");


router.get("/donate",userController.getDonatePage);
router.get("/",userController.getHomePage);

module.exports = router;