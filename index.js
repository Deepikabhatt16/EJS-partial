import express from "express";
 import {fileURLToPath}from "url";
import {dirname} from "path";
const __dirname=dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static("front"));
app.get("/", (req, res) => {
  res.render(__dirname+"/view/index.ejs");
});

app.get("/about", (req, res) => {
  res.render(__dirname+"/view/about.ejs");
});

app.get("/contact", (req, res) => {
  res.render(__dirname+"/view/contact.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
 