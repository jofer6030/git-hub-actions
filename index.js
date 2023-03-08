const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req,res) => {
  res.send("Hola Mundo 2")
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});