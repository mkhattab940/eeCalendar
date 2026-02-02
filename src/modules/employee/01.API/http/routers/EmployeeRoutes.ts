import { Router } from 'express';
import { container } from '../../../../../shared/02.Infrastructure/container.js';
import { RegisterEmployeeController } from '../controllers/RegisterEmployeeController.js';

const employeeRouter = Router();

const registerEmployeeController = container.resolve('registerEmployeeController');




employeeRouter.post('/', (req, res) => registerEmployeeController.execute(req, res));

export { employeeRouter };