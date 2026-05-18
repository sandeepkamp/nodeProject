// External Module

const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    // console.log(req.url, req.method);
    res.send(`
      <h1>Welcome to our website</h1>
      <a href="/host/add-home">add Home</a>`
    );
});

module.exports = userRouter;