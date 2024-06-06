const express = require("express");
const router = express.Router();

const {localFileUpload,imageUplode,videoUplode,imageSizeReducer} =require("../controllers/File");

router.post("/localFileUpload" ,localFileUpload);

router.post("/imageUplode" ,imageUplode);
router.post("/videoUplode" ,videoUplode);
router.post("/imageSizeReducer" ,imageSizeReducer);
module.exports= router;