import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public serviceUrl = 'https://dashboard.healthit.gov/api/open-api.php?source=hospital-mu-public-health-measures.csv'

  constructor(private http: HttpClient,) {
  }

  getStatistics(): Observable<any> {
    return this.http.get(this.serviceUrl);
  }
}
