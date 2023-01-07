const express = require("express");
const videoRoute = require("./videos.routes");
const router = express.Router();

// console.log("this is from router index.js file");
router.use("/videos", videoRoute);
module.exports = router;
