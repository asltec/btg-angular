import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MarvelCharacterApi {

    private API_URL = environment.API_URL;

    constructor(private http: HttpClient) { }

    getAllCharacters(): Observable<any> {
        return this.http.get<any>(this.API_URL)
            .pipe(map((data: any) => data.data.results))
    }

}