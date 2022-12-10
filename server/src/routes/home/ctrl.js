const getRes = (req, res) => {
  res.status(200).json("body {background-color:#242424;}");
};

module.exports = { getRes };