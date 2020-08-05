import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Company } from './company';
import { DetailCompanyModel } from './detailcompany';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private http: HttpClient
  ) { }

  deleteCompany(id: string) {
    return this.http.delete('http://localhost:3000/api/companies/' + id);
  }



  getCompanies(): Observable<Array<Company>> {
    return this.http.get<Array<Company>>('http://localhost:3000/api/companies').pipe(delay(0));
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
