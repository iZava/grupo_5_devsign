const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mainRouter = require("./routes/indexRouter");

app.use(express.static(path.join(__dirname, '../', "public")));
app.set("view engine", "ejs");
app.set("views","./src/views");
app.use("/", mainRouter);

app.listen(port, () => console.log("server working"));
