import { Router } from 'express';
import { RegisterEmployeeController } from '@modules/employee/01.API/http/controllers/RegisterEmployeeController.js';
import type { GetAllEmployeesController } from './controllers/GetAllEmployeesController.js';

interface EmployeeRoutesDeps {
    registerEmployeeController: RegisterEmployeeController,
    getAllEmployeesController: GetAllEmployeesController
}

export const createEmployeeRouter = ({ registerEmployeeController, getAllEmployeesController }: EmployeeRoutesDeps): Router => {
    const router = Router();
    router.post('/registerEmployee', (req, res) => registerEmployeeController.handle(req, res));
    router.get('/getAllEmployees', (req, res) => getAllEmployeesController.handle(req, res));

    return router;
}
