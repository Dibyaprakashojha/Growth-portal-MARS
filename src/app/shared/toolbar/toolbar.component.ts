import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

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
