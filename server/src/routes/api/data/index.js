const express = require('express');
const router = express();
const { setData, getDatas, updateData } = require("./ctrl");

router.post("/", setData);
router.get("/", getDatas);
router.put("/:id", updateData);

module.exports = router;