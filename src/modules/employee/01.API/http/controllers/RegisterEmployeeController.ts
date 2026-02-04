import type { Request, Response } from 'express';
import { BaseController } from '@shared/01.API/http/BaseController.js';
import type { RegisterEmployeeUseCase } from '@modules/employee/03.Application/commands/RegisterEmployee.js';

interface RegisterEmployeeControllerDeps {
    registerEmployeeUseCase: RegisterEmployeeUseCase;
}

export class RegisterEmployeeController extends BaseController {
    registerEmployeeUseCase: RegisterEmployeeUseCase;

    constructor({registerEmployeeUseCase}: RegisterEmployeeControllerDeps) {
        super();
        this.registerEmployeeUseCase = registerEmployeeUseCase;
    }

    public async handle(req: Request, res: Response): Promise<Response> {
        try {
            const dto = {
                id: req.body.id,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber,
                email: req.body.email
            };
            
            const result = await this.registerEmployeeUseCase.execute(dto);
            
            if (result.isFailure) 
                return this.clientError(res, result.error || 'Unknown error');
            
            return this.created(res);
        } catch (error) {
            return this.fail(res, error as string);
        }
    }
}