const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();

app.use(cors());

app.use(fileUpload({
    createParentPath: true
}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/api/fileanalyse", (req, res) => {
  if(!req.files || !req.files.upfile) {
    return;
  }

  res.send(req.files.upfile.size.toString());
}); 

const listener = app.listen(process.env.PORT, () => {
  console.log("App listening on port " + listener.address().port);
});