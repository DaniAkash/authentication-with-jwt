const express = require("express");

const userRouter = express.Router();

userRouter.route('/')
  .get((req, res) => {
    res.send("Users Home!");
  });

userRouter.route('/profile')
  .get((req, res) => {
    res.send("Users Profile!");
  });

module.exports = userRouter;