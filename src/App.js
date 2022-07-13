const express = require("express");
const session = require("express-session");
const cors = require("cors");
const path = require("path");
const methodOverride =  require('method-override');
const app = express();
const port = process.env.PORT || 3001;

// ******Static files******
app.use(express.static(path.join(__dirname, "../", "public")));
app.use(cors());

// ******Middlewares******
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use (session({secret: "This is a secret", 
resave: false,
saveUninitialized: false }));

// ******App middlewares******
const userLogged = require("./middlewares/userLogged"); 
app.use(userLogged);
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// ******Settings******
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// *******Routes*******
const productsRouter = require("./routes/productsRouter");
const usersRouter = require("./routes/usersRouter");
const apiProductsRouter = require("./routes/api/apiProductsRouter");
const apiUsersRouter = require("./routes/api/apiUsersRouter");
const indexRouter = require("./routes/indexRouter");

app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/products", apiProductsRouter);
app.use("/users", apiUsersRouter);
app.use("/", indexRouter);

// ******Start server******
app.listen(port, () => console.log(`Server running on port ${port}`));
