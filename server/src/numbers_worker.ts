import { IFunFact, PrimeFact, PSFact } from "./facts";


export interface INumberInfo {
    _number : number;
    isEven?: boolean;
    isPrime? : boolean;
    divisors? : Array<number>;
    funFacts? : Array<string>;
}

export interface IFactsInfo {
    _number : number;
    facts? : Array<IFunFact>;
}

/**
 * Provides the logic for populating INumberInfo
 */
export class NumbersWorker {
    
    constructor()
    {
        
    }


    private static getDivisors(num : number) : Array<number>
    {
        let divisors = new Array<number>();

        for(let i : number =1; i<=num; i++)
        {
            if (num%i == 0 && !divisors.find(item=> item==i))
                divisors.push(i);
        }

        console.log(divisors);
        return divisors;
    }

    /**
     * Lists integer info for integers in [0-99999] range
     * @param num a valid number [0-99999] or a string representation of one
     * @returns basic integer information
     */
    public listInfo(num : number | string): Promise<INumberInfo> {

        console.log(`in NumbersWorker.listInfo(${num})`);
    
        
        return new Promise<INumberInfo>((inResolve, inReject) => {
            try {
                //numbers only, no more then 5 charachres long
                const regex = new RegExp('^[0-9]{1,5}$');
                if (( typeof num === "string" ) && (!regex.test(num)))
                    throw new Error('Please provide a number');

                const _num = typeof num === "string" ? parseInt(num) : num;
                if (isNaN(_num))
                    throw new Error('Please provide a number');
                
                const divisors = NumbersWorker.getDivisors(_num);
                const info : INumberInfo = { _number: _num, isEven: _num%2==0, isPrime: divisors.length<=2, divisors:divisors};
                inResolve(info);
           }
            catch(error: any)
            {
                console.log("ERROR in NumbersWorker.listInfo(): ", error);
                inReject(error);
            }
      });
    }
     
    public listFunFacts(num : number | string) : Promise<IFactsInfo>
    {
        console.log(`in NumbersWorker.listFunFacts(${num})`);
    
        
        return new Promise<IFactsInfo>((inResolve, inReject) => {
            try {
                //numbers only, no more then 5 charachres long
                const regex = new RegExp('^[0-9]{1,5}$');
                if (( typeof num === "string" ) && (!regex.test(num)))
                    throw new Error('Please provide a number');

                const _num = typeof num === "string" ? parseInt(num) : num;
                if (isNaN(_num))
                    throw new Error('Please provide a number');
                
                const info : IFactsInfo = { _number: _num, facts:NumbersWorker.getFacts(_num)};
                inResolve(info);
           }
            catch(error: any)
            {
                console.log("ERROR in NumbersWorker.listInfo(): ", error);
                inReject(error);
            }
      });
    }

    private static getFacts(_num: number): IFunFact[] | undefined {

        try {
        return [new PrimeFact(_num), new PSFact(_num)];
        }
        catch(e)
        {
            throw( new Error("Error getting facts"));
        }
    }
}

// function getFacts(_num: number): IFunFact[] | undefined {

//     try {
//     return [new PrimeFact(_num), new PSFact(_num)];
//     }
//     catch(e)
//     {
//         throw( new Error("Error getting facts"));
//     }
// }
