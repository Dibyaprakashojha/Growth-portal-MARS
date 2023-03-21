import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { elementAt, Observable } from 'rxjs';

@Component({
  selector: 'app-content-blocks',
  templateUrl: './content-blocks.component.html',
  styleUrls: ['./content-blocks.component.scss']
})
export class ContentBlocksComponent  implements OnInit{
  
  blockValue: string = "";
  commonArray = []
  brandContentArray: any
  

  constructor(
  public router: Router,
    public http: HttpClient,
  public activatedRoute:ActivatedRoute
  ) {
  }


  
  brandContent() {
    this.commonArray.forEach((each:any)=>{
      if (each['Brand Content'])
      this.brandContentArray=each['Brand Content']
    })
    console.log(`fghj`,this.brandContentArray);
  }

 
  ngOnInit(): void {
    this.blockValue = (this.router.url.includes("europe")) ? "europe" : "america";
    this.http.get<any>('assets/custom-json.json').subscribe((data) => {
      console.log(data);
      this.commonArray=data
    });
  }


}
