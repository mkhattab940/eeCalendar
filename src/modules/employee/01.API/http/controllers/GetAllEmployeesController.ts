import type { Request, Response } from 'express';
import { BaseController } from '@shared/01.API/http/BaseController.js';
import type { GetAllEmployeesDTO, GetAllEmployeesUseCase } from '@modules/employee/03.Application/queries/GetAllEmployees.js';

interface GetAllEmployeesControllerDeps {
    getAllEmployeesUseCase: GetAllEmployeesUseCase;
}

export class GetAllEmployeesController extends BaseController {
    getAllEmployeesUseCase: GetAllEmployeesUseCase;

    constructor({getAllEmployeesUseCase}: GetAllEmployeesControllerDeps) {
        super();
        this.getAllEmployeesUseCase = getAllEmployeesUseCase;
    }

    public async handle(req: Request, res: Response): Promise<Response> {
        try {
            
            const result = await this.getAllEmployeesUseCase.execute();
            
            if (result.isFailure) 
                return this.clientError(res, result.error || 'Unknown error');
            
            return this.ok<GetAllEmployeesDTO>(res, result.getValue());
        } catch (error) {
            return this.fail(res, error as string);
        }
    }
}