import { Request, Response } from 'express';

export default{
    async addition(request: Request, response: Response){
        //const numbers = request.body;
        let {firstNumber, secondNumber} = request.body;
        const total = (parseFloat(firstNumber) + parseFloat(secondNumber)).toString();
        //console.log(total);
        return response.json({ total });
    }
}