const jobController = require("../controllers/jobController");
const { verifyAndAuthorized,verifyToken,verifyAndAdmin } = require("../middleware/verifyToken");
const router = require("express").Router();

router.post("/",verifyAndAdmin, jobController.createJob);

router.put("/:id",verifyAndAdmin, jobController.updateJob);

router.delete("/:id",verifyAndAdmin, jobController.deleteJob);


router.get("/:id",jobController.getJob);

router.get("/",jobController.getAllJob);

router.get("/search/:key",jobController.searchJobs);


module.exports = router