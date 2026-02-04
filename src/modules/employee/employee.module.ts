import { asClass, asFunction, type AwilixContainer } from 'awilix';
import { RegisterEmployeeUseCase } from './03.Application/commands/RegisterEmployee.js';
import { RegisterEmployeeController } from './01.API/http/controllers/RegisterEmployeeController.js';
import { GetAllEmployeesUseCase } from './03.Application/queries/GetAllEmployees.js';
import { GetAllEmployeesController } from './01.API/http/controllers/GetAllEmployeesController.js';
import { EmployeeRepository } from './02.Infrastructure/repositories/memory/EmployeeRepository.js';
import { createEmployeeRouter } from './01.API/http/EmployeeRoutes.js';

export function registerEmployeeModule(container: AwilixContainer): void {
    container.register({
        // Repositories
        employeeRepository: asClass(EmployeeRepository).singleton(),

        // Commands
        registerEmployeeUseCase: asClass(RegisterEmployeeUseCase).singleton(),
        getAllEmployeesUseCase: asClass(GetAllEmployeesUseCase).singleton(),

        // Controllers
        registerEmployeeController: asClass(RegisterEmployeeController).singleton(),
        getAllEmployeesController: asClass(GetAllEmployeesController).singleton(),

        // Routers
        employeeRouter: asFunction(createEmployeeRouter).singleton(),
    });
}