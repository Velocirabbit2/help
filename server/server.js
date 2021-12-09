const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

const eventRouter = require('./routes/router.js');

app.use(express());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// define the route handlers
app.use('/api', eventRouter);

// catch-all route handler for any unknown endpoints
app.get((req, res) => res.sendStatus(404));

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// default error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
