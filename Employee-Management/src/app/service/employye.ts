import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [
    new Employee(1, 'Darshita Pandey', 'IT'),
    new Employee(2, 'Rahul Sharma', 'HR'),
    new Employee(3, 'Anjali Verma', 'Finance'),
    new Employee(4, 'Amit Kumar', 'Marketing'),
    new Employee(5, 'Darshita Pandey', 'HR'),
  ];
  //method to return all the employees
   getEmployees(): Observable<Employee[]> {
    return of(this.employees);   //  now returns Observable
  }

  getEmployeeById(id: number): Observable<Employee | undefined> {
    return of(this.employees.find(emp => emp.id === id));
}
}
