const userController = require("../controllers/userController");
const { verifyAndAuthorized,verifyToken,verifyAndAdmin } = require("../middleware/verifyToken");
const router = require("express").Router();

router.put("/",verifyAndAuthorized, userController.updateUser);

router.delete("/",verifyAndAuthorized, userController.deleteUser);

router.get("/",verifyAndAuthorized, userController.getUser);

router.get("/",verifyAndAdmin, userController.getAllUser);



module.exports = router