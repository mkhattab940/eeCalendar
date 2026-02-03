import { asClass, asFunction, type AwilixContainer } from 'awilix';
import { RegisterEmployeeUseCase } from './03.Application/commands/RegisterEmployee.js';
import { EmployeeRepository } from './02.Infrastructure/repositories/memory/EmployeeRepository.js';
import { RegisterEmployeeController } from './01.API/http/controllers/RegisterEmployeeController.js';
import { createEmployeeRouter } from './01.API/http/routers/EmployeeRoutes.js';

export function registerEmployeeModule(container: AwilixContainer): void {
    container.register({
        // Repositories
        employeeRepository: asClass(EmployeeRepository).singleton(),

        // Commands
        registerEmployeeUseCase: asClass(RegisterEmployeeUseCase).singleton(),

        // Controllers
        registerEmployeeController: asClass(RegisterEmployeeController).singleton(),

        // Routers
        employeeRouter: asFunction(createEmployeeRouter).singleton(),
    });
}