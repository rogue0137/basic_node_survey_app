const express = require('express');
const Joi = require('joi');
const path = require('path');


const indexRouter = require('./routes/index');
const surveysRouter = require('./routes/surveys');

const app = express();

// set up views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/surveys', surveysRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));



