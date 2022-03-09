import express, { Express, NextFunction, Request, Response } from 'express';
const path = require('path');

//setup routers
const numbersRouter = require('./numbers_router');

export const get = () => {
  const app: Express = express();
  app.use(express.json());

  //enable CORS
  app.use(function (
    inRequest: Request,
    inResponse: Response,
    inNext: NextFunction
  ) {
    inResponse.header('Access-Control-Allow-Origin', '*');
    inResponse.header(
      'Access-Control-Allow-Methods',
      'GET,POST,PUT,DELETE,OPTIONS'
    );
    inResponse.header(
      'Access-Control-Allow-Headers',
      'Origin,X-Requested-With,Content-Type,Accept'
    );
    inNext();
  });

  app.use(express.static(path.join(__dirname, '../../../client/build')));

  //use numbers router for all numbers requests
  app.use('/numbers', numbersRouter);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../../client/build/index.html'));
  });

  return app;
};

export const start = () => {
  const app = get();

  try {
    //server will not start when testing
    if (process.env.NODE_ENV !== 'test') {
      // Start app listening.
      const port = process.env.PORT || 80;
      app.listen(port, () => {
        console.log(`numbers server open for requests on port ${port}`);
      });
    }
  } catch (error: any) {
    console.log(
      `Error occurred while starting numbers server: ${error.message}`
    );
  }
};

start();
