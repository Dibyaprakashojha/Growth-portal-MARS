import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ContentImageComponent } from './content-image/content-image.component';
import { ContentBlocksComponent } from './content-blocks/content-blocks.component';
import { ArticleBlockComponent } from './article-block/article-block.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPageComponent } from './search-page/search-page.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { NgAisModule } from 'angular-instantsearch';

@NgModule({
  declarations: [
    AppComponent,
    ContentImageComponent,
    ContentBlocksComponent,
    ArticleBlockComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    MaterialModule, 
    HttpClientModule,
    MatInputModule,
    NgAisModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
