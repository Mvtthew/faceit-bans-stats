import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ban } from '../models/Ban';

@Injectable({
	providedIn: 'root'
})
export class FaceitService {

	apiUrl: string = 'https://api.faceit.com/sheriff/v1/';

	constructor(private http: HttpClient) { }

	getBans(page: number, size: number): Observable<Ban[]> {
		return this.http.get<Ban[]>(`${this.apiUrl}/bans?page=${page}&size=${size}`);
	}

}
