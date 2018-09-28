import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MovieSearchService {

  url = 'https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/RiotSchmick?api_key=RGAPI-c685f626-9833-4e34-ad55-d5e055b2d053';
  pageIndex = 1;
  // GET /lol/summoner/v3/summoners/by-account/{accountId}
  // https://developer.riotgames.com/getting-started.html

  constructor(private http: Http) { }

  getMovie(name): Observable<any> {
    let query;
    query = '&s=' + name + '&page=' + this.pageIndex;
    console.log(this.url + query);
    return this.http.get(this.url + query).pipe(map((res: Response) => res.json()));
  }

  incrementIndex(){
    if (this.pageIndex<100)
      this.pageIndex = this.pageIndex + 1;
  }
  decrementIndex(){    
    if (this.pageIndex>1)
      this.pageIndex = this.pageIndex - 1;
  }
  resetIndex(){
    this.pageIndex=1;
  }
}
