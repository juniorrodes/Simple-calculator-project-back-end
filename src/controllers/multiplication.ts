import { Request, Response } from 'express';
import connection from '../database/connection';

export default{
    async multiplication(request: Request, response: Response){
        let {firstNumber, secondNumber} = request.body;
        const result = (parseFloat(secondNumber) * parseFloat(firstNumber)).toString();
        const operation = secondNumber + ' X ' + firstNumber;
        await connection('historic').insert({
            operation,
            result
        })
        //console.log(total);
        return response.json({  result });
    }
}