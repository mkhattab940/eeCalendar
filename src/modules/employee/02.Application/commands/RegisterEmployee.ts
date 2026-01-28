import { Result } from '../../../../shared/01.Domain/Result.js';
import { Employee } from '../../01.Domain/entities/Employee.js';
import type { EmployeeProps } from '../../01.Domain/entities/Employee.js';
import { type IEmployeeRepository } from '../../01.Domain/ports/IEmployeeRepository.js';

export interface RegisterEmployeeDTO {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

export class RegisterEmployeeUseCase {
    constructor(
        private readonly employeeRepository: IEmployeeRepository
    ) {}

    async execute(dto: RegisterEmployeeDTO): Promise<Result<void>> {
        const exists = await this.employeeRepository.exists(dto.id);
        if (exists) {
            throw new Error(`Employee with id ${dto.id} already exists.`);
        }

        const props = this.map(dto);

        const employee = Employee.create(dto.id, props);

        await this.employeeRepository.save(employee);

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