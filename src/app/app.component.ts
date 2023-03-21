import { Component } from '@angular/core';
import { Router } from '@angular/router';
import algoliasearch from 'algoliasearch/lite';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displaySearch: boolean = false;
  name!: string;
  
  constructor(private router:Router) {
  }

  displaySearchBar(value:boolean) {
    this.displaySearch = value;
  }

  onkeyDownEvent(event: any) {
    this.router.navigate(['/searchpage'], { queryParams: { searchValue: this.name } });
  }
}
