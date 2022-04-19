const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// ******Static files******
app.use(express.static(path.join(__dirname, "../", "public")));

// ******Settings******
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// *******Routes*******
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/", indexRouter);

// ******Start server******
app.listen(port, () => console.log("server working"));
