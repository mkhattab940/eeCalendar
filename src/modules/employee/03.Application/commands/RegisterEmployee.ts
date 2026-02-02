import { Result } from '../../../../shared/04.Domain/Result.js';
import { Employee } from '../../04.Domain/entities/Employee.js';
import type { EmployeeProps } from '../../04.Domain/entities/Employee.js';
import { type IEmployeeRepository } from '../../04.Domain/ports/IEmployeeRepository.js';
import { type IApplicationCommand } from '../../../../shared/02.Infrastructure/commands/IApplicationCommand.js';

interface RegisterEmployeeUsecaseDeps {
    employeeRepository: IEmployeeRepository;
}

export class RegisterEmployeeUseCase implements IApplicationCommand<Employee> {
    readonly repository: IEmployeeRepository;
    
    constructor(
        {employeeRepository}: RegisterEmployeeUsecaseDeps
    ) {   
        this.repository =  employeeRepository;
     }

    async execute(dto: RegisterEmployeeDTO): Promise<Result<void>> {
        const exists = await this.repository.exists(dto.id);
        if (exists) {
            throw new Error(`Employee with id ${dto.id} already exists.`);
        }

        const props = this.map(dto);

        const employee = Employee.create(dto.id, props);

        await this.repository.save(employee);

        return Result.ok<void>();
    }

    map(dto: RegisterEmployeeDTO): EmployeeProps {
        return {
            firstName: dto.firstName,
            lastName: dto.lastName,
            phoneNumber: dto.phoneNumber,
            email: dto.email
        };
    }
}

export interface RegisterEmployeeDTO {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}