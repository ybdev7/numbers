import { IPrimeFact, IPSFact } from '../../src/facts';
import { NumbersWorker } from '../../src/numbers_worker';

describe('numbers worker', () => {
  //expected result
  //{"_number":6777,"isEven":false,"isPrime":false,"divisors":[1,3,9,27,251,753,2259,6777]}
  it('Should return the info for number 6777', async () => {
    let worker = new NumbersWorker();
    let data = await worker.listInfo(6777);
    expect(data?._number).toEqual(6777);
    expect(data?.divisors?.length).toEqual(8);
    expect(data?.divisors).toContain(1);
    expect(data?.divisors).toContain(3);
    expect(data?.divisors).toContain(9);
    expect(data?.divisors).toContain(27);
    expect(data?.divisors).toContain(251);
    expect(data?.divisors).toContain(753);
    expect(data?.divisors).toContain(2259);
    expect(data?.divisors).toContain(6777);
    expect(data?.isPrime).toEqual(false);
    expect(data?.isEven).toEqual(false);
  });

  //expected result
  //{"_number":1024,"isEven":true,"isPrime":false,"divisors":[1,2,4,8,16,32,64,128,256,512,1024]}
  it('Should return the info for number 1024', async () => {
    let worker = new NumbersWorker();
    let data = await worker.listInfo(1024);
    expect(data?._number).toEqual(1024);
    expect(data?.divisors?.length).toEqual(11);
    expect(data?.divisors).toContain(1);
    expect(data?.divisors).toContain(2);
    expect(data?.divisors).toContain(4);
    expect(data?.divisors).toContain(8);
    expect(data?.divisors).toContain(16);
    expect(data?.divisors).toContain(32);
    expect(data?.divisors).toContain(64);
    expect(data?.divisors).toContain(128);
    expect(data?.divisors).toContain(256);
    expect(data?.divisors).toContain(512);
    expect(data?.divisors).toContain(1024);
    expect(data?.isPrime).toEqual(false);
    expect(data?.isEven).toEqual(true);
  });

  //expected result
  //{"_number":1024,"facts":[{"prime":1021,"src":1024},{"perfectSquare":1024,"src":1024}]}
  it('Should return fun info for number 1024', async () => {
    let worker = new NumbersWorker();
    let data = await worker.listFunFacts(1024);
    expect(data?._number).toEqual(1024);
    expect(data?.facts?.length).toEqual(2);

    if (data && data.facts) {
      let pf = data.facts[0] as IPrimeFact;
      expect(pf.prime).toEqual(1021);

      let ps = data.facts[1] as IPSFact;
      expect(ps.perfectSquare).toEqual(1024);
    }
  });

  it('Should return an error for abc', async () => {
    let worker = new NumbersWorker();

    try {
      let data = await worker.listFunFacts('abc');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toBe('Please provide a number');
    }
  });
});
