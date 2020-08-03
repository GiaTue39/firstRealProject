import { Injectable } from '@angular/core';
import { Employees } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DetailEmployeeModel } from './detail-employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http
      .get('http://localhost:3000/api/employees')
      .pipe(delay(2000));
  }

  getUserById(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/api/employees' + id);
  }

  createEmployee(employee): Observable<any> {
    return this.http.post('http://localhost:3000/api/employees', employee);
  }

  updateUser(employee): Observable<any> {
    return this.http.put(
      'http://localhost:3000/api/employees' + employee.id,
      employee
    );
  }

  deleteEmployee(id: string) {
    return this.http.delete('http://localhost:3000/api/employees/' + id);
  }

  getEmployee(id: string): Observable<DetailEmployeeModel> {
    return this.http.get<DetailEmployeeModel>(
      'http://localhost:3000/api/employees/' + id
    );
  }

  update(id: string, model): Observable<any> {
    return this.http.put<DetailEmployeeModel>(
      'http://localhost:3000/api/employees/' + id,
      model
    );
  }
}
