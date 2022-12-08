const app = require("./src/app");
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server on : http://localhost:${PORT}`);
});
