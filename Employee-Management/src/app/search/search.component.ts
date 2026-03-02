import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../service/employye';
import { Employee } from '../models/employee';
import { Observable, BehaviorSubject, combineLatest, map } from 'rxjs';
import { RouterModule } from '@angular/router';
import { EmployeeList } from '../employee-list/employee-list.component';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule,EmployeeList],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private searchText$ = new BehaviorSubject<string | null>(null);

  employees$!: Observable<Employee[]>;
  filteredEmployees$!: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService) {

    this.employees$ = this.employeeService.getEmployees();

    this.filteredEmployees$ = combineLatest([
      this.employees$,
      this.searchText$
    ]).pipe(
      map(([employees, searchText]) => {

        //  If no search text → return empty list
        if (!searchText || searchText.trim() === '') {
          return [];
        }

        return employees.filter(emp =>
          emp.name.toLowerCase().includes(searchText.toLowerCase())
        );
      })
    );
  }

  onSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchText$.next(value);
  }
}