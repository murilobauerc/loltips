import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MovieSearchService {

  // url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name;
  url = 'https://na1.api.riotgames.com/?api_key=RGAPI-e15209c0-62d0-4bf7-bf09-496e0cac211f';

  // GET /lol/summoner/v3/summoners/by-account/{accountId}
  // https://developer.riotgames.com/getting-started.html

  constructor(private http: Http) { }

  getMovie(name): Observable<any> {
    let query;
    query = '&s=' + name + '&page=' + this.pageIndex;
    console.log(this.url + query);
    return this.http.get(this.url + query).pipe(map((res: Response) => res.json()));
  }