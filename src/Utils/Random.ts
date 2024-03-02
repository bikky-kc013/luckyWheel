import CustomError from "../Api/Middlewares/GlobalError";

const randomGenerator = ():number  => {
    try{
        const randomNumber =  Math.random();
        const ValueInRange =  Math.floor(randomNumber*3)+1;
        return ValueInRange ;

    }catch(error){
        console.log("error:", error);
        throw new CustomError("PLease Make a Draw Again", 500);
    }
}

export default  randomGenerator;




