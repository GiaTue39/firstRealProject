import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './components/company';
import { DetailCompanyModel } from './components/detailcompany';

@Injectable()
export class CompanyService {

  constructor(
    private http: HttpClient
  ) { }

  deleteCompany(id: string) {
    return this.http.delete('http://localhost:3000/api/companies/' + id);
  }



  getCompanies(): Observable<Array<Company>> {
    const token = localStorage.getItem("token");
    let headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${token}`,
    );
    return this.http.get<Array<Company>>('http://localhost:3000/api/companies', {
      headers
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

}
