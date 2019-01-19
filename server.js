const express = require('express');
const surveysRouter = require('./routes/surveys');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/surveys', surveysRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;

