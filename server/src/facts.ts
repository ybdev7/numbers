const FACTS : Array<string> = 
[
    `The closest prime number to ${0} is ${1}`,
];

export interface IFunFact 
{
    src : number;
}

export interface IPrimeFact extends IFunFact
{
    prime: number;
}

/**
 * Closest Perfect square number (number that equals another number to the power of 2) fact
 */
export interface IPSFact extends IFunFact
{
    perfectSquare: number;
}

export class PrimeFact implements IPrimeFact 
{
     prime: number;
     src : number;
        
    constructor(srcNumber:number)
    {
        
        this.prime = this.findPrime(srcNumber);
        this.src = srcNumber;
    }

    public toString = () : string => { return `The closest prime number to ${this.src} is ${this.prime}`;}

    private findPrime = (srcNumber:number) : number =>
    {
        let _sprime = srcNumber;
        let _lprime = srcNumber;

        while (_sprime > 1)
        {
            if (PrimeFact.isPrimeNumber(_sprime))
                break;
            else
                _sprime--;
        }

        while (_lprime < 1000000)
        {
            if (PrimeFact.isPrimeNumber(_lprime))
                break;
            else
                _lprime++;
        }

        return (srcNumber - _sprime < _lprime - srcNumber) ? _sprime: _lprime;
        
    }
    
    private static isPrimeNumber(num : number) : boolean 
    {
        if (num%2 == 0)
            return false;

        const  sqrtnum = Math.sqrt(num);
        for(let i : number = 3; i<=sqrtnum; i++)
        {
            if (num%i == 0)
                return false;
        }
        return true;
    }
};

export class PSFact implements IPSFact 
{
     perfectSquare : number;
     src : number;
        
    constructor(srcNumber:number)
    {
        this.perfectSquare = this.getPS(srcNumber);
        this.src = srcNumber;
    }

    private  getPS = (srcNumber: number): number => {
        let _sPS = Math.round(Math.sqrt(srcNumber));
        let _lPS = _sPS+1;

        return (srcNumber - Math.pow(_sPS, 2) < Math.pow(_lPS,2) - srcNumber) ? Math.pow(_sPS, 2): Math.pow(_lPS,2);
    }
    public toString = () : string => { return `The closest perfect square number to ${this.src} is ${this.perfectSquare}`;}
    
};


