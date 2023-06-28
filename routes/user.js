const userController = require("../controllers/userController");
const { verifyAndAuthorized,verifyToken,verifyAndAdmin } = require("../middleware/verifyToken");
const router = require("express").Router();

router.put("/:id",verifyAndAuthorized, userController.updateUser);

router.delete("/:id",verifyAndAuthorized, userController.deleteUser);

router.get("/:id",verifyAndAuthorized, userController.getUser);

router.get("/",verifyAndAdmin, userController.getAllUser);



module.exports = router