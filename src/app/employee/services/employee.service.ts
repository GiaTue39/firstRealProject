import { Injectable } from "@angular/core";
import { Employees } from "./../models/employee";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";
import { DetailEmployeeModel } from "./../models";
@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<any> {
    return this.http.get("employees").pipe(delay(2000));
  }

  getUserById(id: number): Observable<any> {
    return this.http.get("employees" + id);
  }

  createEmployee(employee): Observable<any> {
    return this.http.post("employees", employee);
  }

  updateUser(employee): Observable<any> {
    return this.http.put("employees" + employee.id, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete("employees/" + id);
  }

  getEmployee(id: string): Observable<DetailEmployeeModel> {
    return this.http.get<DetailEmployeeModel>("employees/" + id);
  }

  update(id: string, model): Observable<any> {
    return this.http.put<DetailEmployeeModel>("employees/" + id, model);
  }
}
