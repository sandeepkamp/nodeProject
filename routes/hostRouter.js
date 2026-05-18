const express = require('express');

const hostRouter = express.Router();

hostRouter.get('/host/add-home',(req, res, next) => {
    res.send(`
      <form action="/host/add-home" method="POST">
        <input type="text" name="homeName" placeholder="Enter home name">
        <button type="submit">Add Home</button>
      </form>
    `);
});

hostRouter.post('/host/add-home',(req, res, next) => {
    res.send('Home added successfully');
});

module.exports = hostRouter;