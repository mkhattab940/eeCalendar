import { BaseEntity } from '../../../../shared/01.Domain/BaseEntity.js';

export interface EmployeeProps {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

export class Employee extends BaseEntity<EmployeeProps> {

    static create(id: string, props: EmployeeProps): Employee {
        return new Employee(id, props);
    }
}

