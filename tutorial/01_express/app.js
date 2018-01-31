const express = require("express");
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.originalUrl);

  next();
});

// Middleware manipulating request 
app.use((req, res, next) => {
  req.foo = "BAR";

  next();
});


// Set up route handling for GET: /
app.get("/", (req, res) => {
  res.send(req.foo);
});

app.get("*", (req, res) => {
  res.send("Page not found");
});

// Listen on port 3000
app.listen(3000, () => {
  console.log("Server is listening on 3000");
});
