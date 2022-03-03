import express from 'express';
import { INumberInfo, NumbersWorker } from './numbers_worker';

// create router
export const numbersRouter = express.Router();

//REST api for numbers

/**
 * Returns a list of facts relevant to the provided number
 */
numbersRouter.get('/funfacts/:num', async (inRequest, inResponse) => {
  console.log(`GET /numbers/funfacts/:num with num=${inRequest.params.num}`);
  try {
    const numbersWorker: NumbersWorker = new NumbersWorker();
    const numberInfo: INumberInfo = await numbersWorker.listFunFacts(
      inRequest.params.num
    );
    console.log(
      `GET /numbers/funfacts/:num - OK. Number choosen =  ${numberInfo._number}`
    );
    inResponse.json(numberInfo);
  } catch (inError) {
    console.log('GET /numbers: Error', inError);
    inResponse.send('error');
  }
});

/**
 * Randomly chooses a number between 0 and 10000 and returns a INumberInfo for it
 */
numbersRouter.get('/random', async (inRequest, inResponse) => {
  console.log('GET /numbers/random');
  try {
    const numbersWorker: NumbersWorker = new NumbersWorker();
    const numberInfo: INumberInfo = await numbersWorker.listInfo(
      Math.round(Math.random() * 10000)
    );
    console.log(
      `GET /numbers/random: OK. Number choosen =  ${numberInfo._number}`
    );
    inResponse.json(numberInfo);
  } catch (inError) {
    console.log('GET /numbers/random: Error', inError);
    inResponse.send('error');
  }
});

/**
 * Returns INumberInfo for a specified number.
 * Throws an error if the parameter provided is nor a proper integer
 */
numbersRouter.get('/info/:num', async (inRequest, inResponse) => {
  console.log(`GET /numbers/info/:num with num=${inRequest.params.num}`);
  try {
    const numbersWorker: NumbersWorker = new NumbersWorker();
    const numberInfo: INumberInfo = await numbersWorker.listInfo(
      inRequest.params.num
    );
    console.log(
      `GET /numbers/info: OK. Number choosen =  ${numberInfo._number}`
    );
    inResponse.json(numberInfo);
  } catch (inError) {
    console.log('GET /numbers/info: Error', inError);
    inResponse.send('error');
  }
});

module.exports = numbersRouter;
