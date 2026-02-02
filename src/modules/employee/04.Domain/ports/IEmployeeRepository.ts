import type { IRepository } from '../../../../shared/03.Application/ports/IRepository.js';
import { type Employee } from '../entities/Employee.js';

export interface IEmployeeRepository extends IRepository<Employee> {
    findById(id: string): Promise<Employee | null>;
    exists(id: string): Promise<boolean>;
    save(employee: Employee): Promise<void>;
}