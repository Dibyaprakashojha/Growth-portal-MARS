import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';


const searchClient = algoliasearch(
  environment.applicationId,
  environment.apiKey
);
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  
  config = {
    indexName: environment.indexName,
    searchClient,
  };

  constructor(public activatedRoute:ActivatedRoute) {
  }

  public searchParameters = {
    query: '',
  };

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.searchParameters.query= data['searchValue']
    })
   
  }

}
