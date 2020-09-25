const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

const usersRouter = require('./routes/user');
const exercisesRouter = require('./routes/exercise');

app.use('/users', usersRouter);
app.use('/exercises', exercisesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});