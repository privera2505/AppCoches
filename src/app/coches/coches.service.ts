import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.deployment";
import { Coches } from "./coches";

@Injectable({
  providedIn: 'root'
})
export class CochesService {
  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {};

    getCoches(): Observable<Coches[]> {
      return this.http.get<Coches[]>(this.apiUrl)
    };

}
