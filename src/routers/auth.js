const express = require("express");

const authRouter = express.Router();

authRouter.route('/')
  .get((req, res) => {
    res.send('login page');
  })
  .post((req, res) => {
    res.send('authentication page');
  })