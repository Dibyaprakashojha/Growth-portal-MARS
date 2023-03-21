import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import algoliasearch from 'algoliasearch';
import { environment } from 'src/environments/environment';

const searchClient = algoliasearch(
  environment.applicationId,
  environment.apiKey
);


@Component({
  selector: 'app-content-image',
  templateUrl: './content-image.component.html',
  styleUrls: ['./content-image.component.scss']
})
export class ContentImageComponent  implements OnInit{
  

  constructor(
  public activatedRoute: ActivatedRoute,
  public router: Router) { }
  
  
  ngOnInit(): void {
  }

  baba() {
    console.log("baba");
  }
  navigateToEurope() {
    // this.activatedRoute.params("/europe");
  }
  navigateToAmerica()
  {
    // this.router.navigate("/america");
  }
}
