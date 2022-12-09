const getRes = (req, res) => {
  res.status(200).json("body {background-color:red;}");
};

module.exports = { getRes };