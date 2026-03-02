import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService} from '../service/employye';
import { Employee } from '../models/employee';
import { CommonModule } from '@angular/common'; 
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-employee-profile',
  standalone: true,
  imports: [CommonModule],  
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  employee$!: Observable<Employee | undefined>;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employee$ = this.employeeService.getEmployeeById(id);
  }
}