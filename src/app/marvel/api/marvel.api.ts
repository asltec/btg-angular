import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class MarvelApi {

    private API_URL = environment.API_URL;

    constructor(private http: HttpClient) { }

    getCharacter(): Observable<any> {
        return this.http.get<any>(this.API_URL);
    }

}