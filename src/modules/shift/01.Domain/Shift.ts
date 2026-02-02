import { type Employee } from '../../employee/04.Domain/entities/Employee.js';
import { type Time } from './Time.js';

class Shift {
    #dayOfWeek: number;
    #startTime: Time;
    #endTime: Time;
    // #employees: Employee[]

    constructor(dayOfWeek: number, startTime: Time, endTime: Time, staffingNeeds: number) {
        this.#dayOfWeek = dayOfWeek;
        this.#startTime = startTime;
        this.#endTime = endTime;
        // this.#employees = [];
    }

    // assignEmployee(employee: Employee, updateEmployee: boolean = true): void {
    //     this.#employees.push(employee);
    //     if (updateEmployee){
    //         employee.assignShift(this, false);
    //     }
    // }

    // removeEmployee(employee: Employee, updateEmployee: boolean = true): void {
    //     this.#employees = this.#employees.filter(e => e !== employee);
    //     if (updateEmployee){
    //         employee.removeShift(this, false);
    //     }
    // }

    // getEmployees(): Employee[] {
    //     return this.#employees;
    // }

    // toString(): string {
    //     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    //     return `${days[this.#dayOfWeek]}: ${this.#startTime.toString()} - ${this.#endTime.toString()}`;
    // }
}

export { type Shift };