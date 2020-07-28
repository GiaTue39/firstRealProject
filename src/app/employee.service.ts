import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employees } from './employee';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  // constructor(private http: HttpClient) {}

  // getEmployee() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/users');
  // }
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
}
