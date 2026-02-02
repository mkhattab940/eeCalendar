import { asClass, type AwilixContainer } from 'awilix';
import { RegisterEmployeeUseCase } from './03.Application/commands/RegisterEmployee.js';
import { EmployeeRepository } from './02.Infrastructure/repositories/memory/EmployeeRepository.js';

export function registerEmployeeModule(container: AwilixContainer): void {
    container.register({
        employeeRepository: asClass(EmployeeRepository).singleton(),
        registerEmployeeUseCase: asClass(RegisterEmployeeUseCase).singleton(),
    });
}