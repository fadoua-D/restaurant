import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { SearchComponent } from './components/search/search.component';
import { SearchRoutingModule } from './search-routing.module';
//import { RouterModule, Routes } from '@angular/router';

//const routes: Routes = [{ path: '', component: SearchComponent }];



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchRoutingModule
   //RouterModule.forChild(routes)
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }
