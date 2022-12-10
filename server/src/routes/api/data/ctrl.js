const asyncHandler = require('express-async-handler');
const fs = require('fs');
// const sampleData = require("../../../models/[name]Model");

const setData = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  // const data = await sampleData.create({
  //   text: req.body.text
  // });
  res.status(200).json("setData");
});

const getDatas = asyncHandler(async (req, res) => {
  
  res.status(200).json("getDatas");
});

const updateData = asyncHandler(async (req, res) => {
  // const data = await sampleData.findById(req.params.id);
  // if (!data) {
  //   res.status(400);
  //   throw new Error("Goal not found");
  // }
  // const updateData = await sampleData.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json("updateData");
});

module.exports = { setData, getDatas, updateData };