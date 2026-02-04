import { Result } from '@shared/04.Domain/Result.js';
import { Employee } from '@modules/employee/04.Domain/entities/Employee.js';
import type { EmployeeProps } from '@modules/employee/04.Domain/entities/Employee.js';
import { type IApplicationCommand } from '@shared/02.Infrastructure/commands/IApplicationCommand.js';
import type { IEmployeeReadRepository } from '@modules/employee/04.Domain/ports/IEmployeeReadRepository.js';

interface GetAllEmployeesUsecaseDeps {
    employeeRepository: IEmployeeReadRepository;
}

export class GetAllEmployeesUseCase implements IApplicationCommand<Employee> {
    readonly repository: IEmployeeReadRepository;
    
    constructor(
        {employeeRepository}: GetAllEmployeesUsecaseDeps
    ) {   
        this.repository =  employeeRepository;
     }

    async execute(): Promise<Result<GetAllEmployeesDTO>> {
        const employees = await this.repository.getAll();

        const employeesDTO = employees.map(emp => this.map(emp));

        return Result.ok<GetAllEmployeesDTO>({
            employees: employeesDTO
        });
    }

    map(employee: Employee): GetEmployeeDTO {
        const props: EmployeeProps = employee.getPropsCopy();
        return {
            id: employee.id,
            firstName: props.firstName,
            lastName: props.lastName,
            phoneNumber: props.phoneNumber,
            email: props.email
        };
    }
}

export interface GetEmployeeDTO {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

export interface GetAllEmployeesDTO {
    employees: GetEmployeeDTO[];
}