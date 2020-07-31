import { Injectable } from '@angular/core';
import { Employees } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  deleteEmployee(id: string) {
    return this.http.delete('http://localhost:3000/api/employees/' + id);
  }
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http
      .get('http://localhost:3000/api/employees')
      .pipe(delay(2000));
  }

  createEmployee(employee): Observable<any> {
    return this.http.post('http://localhost:3000/api/employees', employee);
  }
}
