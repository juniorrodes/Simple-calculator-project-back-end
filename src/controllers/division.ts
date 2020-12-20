import { Request, Response } from 'express';
import connection from '../database/connection';

export default{
    async division(request: Request, response: Response){
        let {firstNumber, secondNumber} = request.body;
        const result = ((parseFloat(secondNumber) / parseFloat(firstNumber)).toFixed(2)).toString();
        const operation = secondNumber + ' ÷ ' + firstNumber;
        await connection('historic').insert({
            operation,
            result
        })
        //console.log(total);
        return response.json({ result });
    }
}