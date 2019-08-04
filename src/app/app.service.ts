import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly prod = 'https://docker-dotnet-sandbox.azurewebsites.net/api/values';
  private readonly dev = 'https://localhost:5001/api/values';

  constructor(private http: HttpClient) { }

  getValues(): Observable<string[]> {
    return this.http.get<string[]>(this.prod);
    // return of([]);
  }
}
