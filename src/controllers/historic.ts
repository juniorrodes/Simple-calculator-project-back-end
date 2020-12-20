import { Request, Response } from 'express';
import connection from '../database/connection';

export default{
    async index(request: Request, response: Response){
        const operations = await connection('historic').select('*').limit(50);
        console.log(operations);
        return response.json(operations);
    }
}