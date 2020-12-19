import { Router } from 'express';

import Addition from './controllers/addition';
import division from './controllers/division';
import Division from './controllers/division';
import Multiplication from './controllers/multiplication';
import Subtraction from './controllers/subtraction'

const routes = Router();

routes.post('/addition', Addition.addition);
routes.post('/division', Division.division);
routes.post('/multiplication', Multiplication.multiplication);
routes.post('/subtraction', Subtraction.subtraction);


export default routes;