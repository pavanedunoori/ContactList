import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms'

import {Routes, RouterModule} from "@angular/router";
import { AddcontactComponent } from './addcontact/addcontact.component';
import {ContactslistComponent} from './contactslist/contactslist.component'
import { ContactserviceService } from './contactservice.service';
const routes: Routes=[
  {path: '' , component : ContactslistComponent},
  {path:'save', component: AddcontactComponent},
  {path:'update/:index', component:AddcontactComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ContactslistComponent,
  AddcontactComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
