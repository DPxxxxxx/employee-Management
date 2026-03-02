export class Employee {

  constructor(
    public id: number,
    public name: string,
    public department: string
  ) {}

  changeDepartment(newDepartment: string) {
    this.department = newDepartment;
  }
}