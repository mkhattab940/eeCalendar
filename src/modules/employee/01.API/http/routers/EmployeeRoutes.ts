import { Router } from 'express';
import { RegisterEmployeeController } from '../controllers/RegisterEmployeeController.js';

interface EmployeeRoutesDeps {
    registerEmployeeController: RegisterEmployeeController;
}

export function createEmployeeRouter({ registerEmployeeController }: EmployeeRoutesDeps): Router {
    const router = Router();
    router.post('/registerEmployee', (req, res) => registerEmployeeController.handle(req, res));
    return router;
}