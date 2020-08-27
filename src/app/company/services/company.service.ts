import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Company } from '../../company/models/company';
import { DetailCompanyModel } from '../../company/models/detailcompany';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CompanyService {
  updateCompany(company: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  createHeader() {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return headers;
  }

  deleteCompany(id: string) {
    return this.http.delete(environment.baseAPIUrl + 'companies/' + id, {
      headers: this.createHeader(),
    });
  }

  getCompanies(): Observable<Array<Company>> {
    return this.http.get<Array<Company>>(environment.baseAPIUrl + 'companies', {
      headers: this.createHeader(),
    });
  }

  createCompany(company): Observable<any> {
    return this.http.post(environment.baseAPIUrl + 'companies', company);
  }

  getCompany(id: string): Observable<DetailCompanyModel> {
    return this.http.get<DetailCompanyModel>(
      environment.baseAPIUrl + 'companies/' + id
    );
  }

  update(id: string, model): Observable<any> {
    return this.http.put<DetailCompanyModel>(
      environment.baseAPIUrl + 'companies/' + id,
      model
    );
  }
}
