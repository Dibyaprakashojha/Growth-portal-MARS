import { ContentBlocksComponent } from './content-blocks/content-blocks.component';
import { ContentImageComponent } from './content-image/content-image.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {
    path: "", component: ContentImageComponent,
    children: [
      { path: "europe", component: ContentBlocksComponent },
      {path:"america",component:ContentBlocksComponent}
    ]
  },
  {path:'searchpage' ,component:SearchPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
