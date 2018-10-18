const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(cookieParser());
app.use(
  session({
    secret: "someSecret"
  })
);
app.use(flash());

app.get("/", (req, res) => {
  res.render("home", { messages: req.flash("info") });
});

app.get("/flash", (req, res) => {
  req.flash("info", "Reload page to remove me!");
  res.redirect("/");
});

app.listen(PORT, () =>
  console.log(`Now listening for connections on port: ${PORT}`)
);
