import axios, { AxiosError, AxiosResponse } from "axios";
import { config } from "./config";

export interface INumberInfo {
  _number: number;
  isEven?: boolean;
  isPrime?: boolean;
  divisors?: Array<number>;
  funFacts?: Array<string>;
}

// export interface IFactsInfo {
//   _number: number;
//   facts?: Array<IFunFact>;
// }

export class NumbersWorker {
  public async geNumberInfo(num: number): Promise<INumberInfo> {
    const response: AxiosResponse = await axios
      .get(`${config.serverAddress}/numbers/info/${num}`)
      .catch((err: Error | AxiosError) => {
        console.log(
          `Error::NumbersWorker.getNumberInfo(${num})::${err.message}`
        );
        throw err;
      });

    return response.data;
  }
}

export enum ServerAPIsEnum {
  NumberInfo = "numberinfo",
}
