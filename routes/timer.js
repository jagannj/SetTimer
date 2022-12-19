const router = require("express").Router();

const { createTimer, averageTime } = require("../controllers/timer");

router.post("/save", createTimer);
router.get("/get", averageTime);

module.exports = router;