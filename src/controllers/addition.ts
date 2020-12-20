import { Request, Response } from 'express';
import connection from '../database/connection';

export default{
    async addition(request: Request, response: Response){
        let {firstNumber, secondNumber} = request.body;
        const result = (parseFloat(firstNumber) + parseFloat(secondNumber)).toString();
        const operation = secondNumber + ' + ' + firstNumber;
        await connection('historic').insert({
            operation,
            result
        })
        //console.log(total);
        return response.json({ result });
    }
}