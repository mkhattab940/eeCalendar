import { BaseEntity } from '@shared/04.Domain/BaseEntity.js';

export interface EmployeeProps {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
}

export class Employee extends BaseEntity<EmployeeProps> {

    static create(props: EmployeeProps): Employee {
        return new Employee(props);
    }
}

