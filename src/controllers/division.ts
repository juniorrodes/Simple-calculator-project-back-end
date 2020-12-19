import { Request, Response } from 'express';

export default{
    async division(request: Request, response: Response){
        //const numbers = request.body;
        let {firstNumber, secondNumber} = request.body;
        const total = (parseFloat(secondNumber) / parseFloat(firstNumber)).toString();
        //console.log(total);
        return response.json({ total });
    }
}