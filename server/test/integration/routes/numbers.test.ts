import {get as numbersApp} from '../../../src/main'
import { agent as _request, SuperAgentTest } from "supertest"
import { Server } from "http";



let agent : SuperAgentTest;
let server :Server;

describe('numbers routes', () => {

    beforeEach((done) => {
        server = numbersApp().listen(4000, () => {
          agent = _request(server)
          done()
        })
      })


    it('Should return the info for number 7', async () => {
        const {body : data} = await agent.get('/numbers/7').expect(200)
        expect(data?._number).toEqual(7);
        expect(data?.divisors.length).toEqual(2);
    })

    it('Should return the info for a random number ', async () => {
        const {body : data} = await agent.get('/numbers/').expect(200)
        expect(data?._number).toBeDefined();
        expect(data?._number).toBeGreaterThanOrEqual(0);
    })


    afterEach((done) => {
        server.close(done)
    })


})