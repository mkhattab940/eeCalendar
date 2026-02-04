import type { IRepository } from "@shared/04.Domain/IRepository.js";
import type { Employee } from "@modules/employee/04.Domain/entities/Employee.js";

export interface IEmployeeReadRepository extends IRepository<Employee> {
    getAll(): Promise<Employee[]>;
    findById(id: string): Promise<Employee | null>;
    exists(id: string): Promise<boolean>;
}