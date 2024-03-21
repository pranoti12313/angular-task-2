import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RadioComponent } from './radio/radio.component';

const routes: Routes = [
  {path : '', component :DropdownComponent},
  {path : 'radio', component :RadioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
