import axios, { AxiosResponse } from "axios";
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
    const response: AxiosResponse = await axios.get(
      `${config.serverAddress}/numbers/info/${num}`
    );

    return response.data;
  }
}

export enum ServerAPIsEnum {
  NumberInfo = "numberinfo",
}
export const useGetNumberInfo = (num: number) =>
  new NumbersWorker().geNumberInfo(num);
