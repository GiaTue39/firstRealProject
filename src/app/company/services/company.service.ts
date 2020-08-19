import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company } from '../../company/models/company';
import { DetailCompanyModel } from '../../company/models/detailcompany';

@Injectable(
  { providedIn: 'root' }
)
export class CompanyService {
  updateCompany(company: any) {
    throw new Error("Method not implemented.");
  }

  constructor(
    private http: HttpClient
  ) { }

  createHeader() {
    const token = localStorage.getItem("token");
    let headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`,
    );

    return headers;
  }

  deleteCompany(id: string) {
    return this.http.delete('http://localhost:3000/api/companies/' + id, { headers: this.createHeader() });
  }

  getCompanies(): Observable<Array<Company>> {
    return this.http.get<Array<Company>>('http://localhost:3000/api/companies', {
      headers: this.createHeader()
    });
  }

  createCompany(company): Observable<any> {
    return this.http.post('http://localhost:3000/api/companies', company);
  }

  getCompany(id: string): Observable<DetailCompanyModel> {
    return this.http.get<DetailCompanyModel>('http://localhost:3000/api/companies/' + id);
  }

  update(id: string, model): Observable<any> {
    return this.http.put<DetailCompanyModel>('http://localhost:3000/api/companies/' + id, model);
  }

  layTruc(): Observable<any> {
    return of('Truccccccccccc');
  }

}
