import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSearchService } from 'src/app/summoner-name-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  tableContent = '';
  searchOnGoing = false;
  searchDone = false;
  resultsArray = [];
  search = '';
  error = '';
  actualSearch = '';

  constructor(private service: UserSearchService) { }

  ngOnInit() {
  }

  searchUser() {
    this.actualSearch = this.search; // 'Murilonomicon'
    this.doRequest();
  }

  private doRequest() {
    this.searchOnGoing = true;
    this.searchDone = false;
    this.service.getUser(this.actualSearch.trim()).subscribe(res => {
      console.log(res);
      if (res.name) {
        this.error = '';
      }else {
        this.error = res.status.status_code;
        this.resultsArray = [];
      }
      
      this.resultsArray.push(res);
      this.searchOnGoing = false;
      this.searchDone = true;
    }, err => this.error = 'Erro de conexão.');
  }
}