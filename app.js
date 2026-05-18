const http = require('http');

const express = require('express');

// Local Module
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');
// const homeRouter = require('./routes/homeRoutes');

const app = express();

app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

app.use(express.urlencoded());
app.get('/', (req, res) => {
    res.redirect('/user');
});
app.use('/user', userRouter);
app.use('/host', hostRouter);


// app.get('/contact-us',(req, res, next) => {
//     console.log('Middleware 3');
//     res.send('Please give your details to contact us');
// });

// app.post('/contact-us',(req, res, next) => {
//     console.log('Middleware 4');
//     res.send('Thanks for contacting us');
// });

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

