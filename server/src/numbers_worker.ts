
export interface INumberInfo {
    _number : number;
    isEven?: boolean;
    isPrime? : boolean;
}

/**
 * Provides the logic for populating INumberInfo
 */
export class NumbersWorker {
    
    constructor()
    {
        
    }

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
                    
                const info : INumberInfo = { _number: _num, isEven: _num%2==0};
                inResolve(info);
           }
            catch(error: any)
            {
                console.log("ERROR in NumbersWorker.listInfo(): ", error);
                inReject(error);
            }
      });
    }
     
}