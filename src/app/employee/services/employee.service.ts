import { Injectable } from '@angular/core';
import { Employees } from './../models/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DetailEmployeeModel } from './../models';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get('api/employees/').pipe(delay(2000));
  }

  getUserById(id: number): Observable<any> {
    return this.http.get('api/employees/' + id);
  }

  createEmployee(employee: Employees): Observable<any> {
    return this.http.post('api/employees/', employee);
  }

  updateUser(employee): Observable<any> {
    return this.http.put('api/employees/' + employee.id, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete('api/employees/' + id);
  }

  getEmployee(id: string): Observable<DetailEmployeeModel> {
    return this.http.get<DetailEmployeeModel>('api/employees/' + id);
  }

  update(id: string, model): Observable<any> {
    return this.http.put<DetailEmployeeModel>('api/employees/' + id, model);
  }
}
