import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly prod = 'https://docker-dotnet-sandbox.azurewebsites.net/api/values';
  private readonly dev = 'https://localhost:5001/api/values';
  private readonly localDbTest = 'http://localhost:8080/api/values/1';
  private readonly dbTest = 'https://docker-dotnet-sandbox.azurewebsites.net/api/values/1';

  constructor(private http: HttpClient) { }

  getValues(): Observable<string[]> {
    return this.http.get<string[]>(this.prod);
    // return of([]);
  }

  getDbTest(): Observable<string[]> {
    return this.http.get<string[]>(this.dbTest);
  }
}
