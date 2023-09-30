const express = require("express");
const router = express.Router();
const  apiGateWay  = require("../controllers/apiGateWay");

router.route("/process-voice").post(apiGateWay);

module.exports = router;
