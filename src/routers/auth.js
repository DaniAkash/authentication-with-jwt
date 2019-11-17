const express = require("express");
const jwt = require("jsonwebtoken");

const authRouter = express.Router();

const testAdminUser = {
  username: "admin",
  password: "password"
};

authRouter.route('/')
  .get((req, res) => {
    res.send('login page');
  })
  .post((req, res) => {
    if(!req.body.username || !req.body.password) {
      res.status(400).json({
        error: "missing required properties"
      });
      return;
    }

    if(
      testAdminUser.username === req.body.username
      &&
      testAdminUser.password === req.body.password
    ) {

      const token = jwt.sign({
        sub: "user",
        username: req.body.username
      }, 
      process.env.JWT_KEY, 
      {
        expiresIn: "3 hours"
      });

      res.status(200).json({
        authToken: token
      });
    } else {
      res.status(401).json({
        error: "user not found"
      });
    }
  })

module.exports = authRouter;