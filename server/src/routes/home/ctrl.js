const getRes = (req, res) => {
  res.status(200).json(".test {background-color:red;}");
};

module.exports = { getRes };