const express = require('express');
const router = express();
const { getRes } = require("./ctrl");

router.get("/", getRes);

module.exports = router;