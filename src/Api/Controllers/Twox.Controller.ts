import { Request, Response, NextFunction } from 'express';
import randomGenerator from '../../Utils/Random';



function fruitPusher(arr: number[]): string[] {
    const fruits: string[] = [];
    const fruitNames: string[] = ["cherry", "orange", "lemon"];
    arr.forEach(num => {
        console.log(num); 
        fruits.push(fruitNames[num - 1]);
    });
    return fruits;
}


function possibleOutcomes(arr:number[]){
    do {
        arr = [ randomGenerator(), randomGenerator(), randomGenerator() ];
     } while (arr[0] === arr[1] || arr[0] === arr[2] || arr[1] === arr[2]);
    return arr;
}



function resultChecker(arr:any[]){
    arr.map((value)=>{
        console.log(value);      
    })
    const condition1 = (arr[0][1] === arr[1][1]) && (arr[0][1] === arr[2][1]);
    const condition2 = (arr[0][2] === arr[1][2]) && (arr[0][2] === arr[2][2]);
    const condition3 = (arr[0][0] === arr[1][0]) && (arr[0][0]=== arr[2][0]);
    if(condition1 || condition2 || condition3){
        return true;
    }else{
        return false;
    }
}



export const spinner = async (req:Request<{}, {},{}>,res:Response,next:NextFunction) =>{
    try{
        let win = 'false';
        let payout = '0'
        let arr1 = [randomGenerator(), randomGenerator(), randomGenerator()]; 
        let arr2 = [randomGenerator(), randomGenerator(), randomGenerator()]; 
        let arr3 = [randomGenerator(), randomGenerator(), randomGenerator()];
        const slot1 = fruitPusher(possibleOutcomes(arr1));
        const slot2 = fruitPusher(possibleOutcomes(arr2));
        const slot3 = fruitPusher(possibleOutcomes(arr3));
        const random = [slot1, slot2, slot3];
        if(resultChecker(random) === true) { win ='true'; payout = '100'};
        res.json({
                "symbols":random,
                "win": win,
                "payout": payout
        })
    }catch(error){
        next(error);
    }
}