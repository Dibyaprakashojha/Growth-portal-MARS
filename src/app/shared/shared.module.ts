import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing.module';
import { CustomRefinementListComponent } from './custom-refinement-list/custom-refinement-list.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    FooterComponent,
    CustomRefinementListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    
  ],
  exports: [
    ToolbarComponent,
    FooterComponent,
    CustomRefinementListComponent
  ]
  
})
export class SharedModule { }
