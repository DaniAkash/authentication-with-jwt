const express = require("express");
const bodyParser = require("body-parser");

const userRouter = require("./routers/users");
const authRouter = require("./routers/auth");

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200).json({ status: "Server Running" });
});

app.use("/login", authRouter);

app.use("/users", userRouter);

app.all("*", (req, res) => {
  res.status(404).send("Not found!");
});

const server = app.listen(process.env.PORT, () => {
  console.log("Server running in port: ", server.address().port);
});
