import { Router } from 'express';

import Addition from './controllers/addition';
import Division from './controllers/division';
import Multiplication from './controllers/multiplication';
import Subtraction from './controllers/subtraction'
import Historic from './controllers/historic'

const routes = Router();

routes.post('/addition', Addition.addition);
routes.post('/division', Division.division);
routes.post('/multiplication', Multiplication.multiplication);
routes.post('/subtraction', Subtraction.subtraction);

routes.get('/historic', Historic.index);

export default routes;