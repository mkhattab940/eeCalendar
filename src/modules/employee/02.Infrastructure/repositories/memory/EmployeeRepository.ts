import { type IEmployeeRepository } from '../../../04.Domain/ports/IEmployeeRepository.js';
import { type Employee } from '../../../04.Domain/entities/Employee.js';

export class EmployeeRepository implements IEmployeeRepository {
    private employees: Map<string, Employee> = new Map();

    async findById(id: string): Promise<Employee | null> {
        return this.employees.get(id) || null;
    }
    async exists(id: string): Promise<boolean> {
        return this.employees.has(id);
    }
    async save(employee: Employee): Promise<void> {
        this.employees.set(employee.id, employee);
    }
}