import { Injectable } from '@angular/core';
import { Employees } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {delay} from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployee(): Array<Employees> {
    return [
      {
        name: 'Huynh Gia Tue',
        phone: '0192121',
        email: 'giatue39@gmail.com',
        status: 'Enable',
      },
      {
        name: 'Le Thi Kim Truc',
        phone: '012122',
        email: 'kimtruc38@gmail.com',
        status: 'Enable',
      },
    ];
  }

  getUsers(): Observable<any> {
    return this.http.get('http://localhost:3000/api/employees').pipe(delay(2000));
  }

  createEmployee(employee): Observable<any>{
    return this.http.post('http://localhost:3000/api/employees', employee);
  }
}
