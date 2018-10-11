import { Injectable } from '@angular/core';
import {Contactdetails} from './contactdetails'
@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {
    contactsList : Contactdetails []=[];
  
  constructor() { }

  saveContacts(contact){
      this.contactsList.push(contact);
  }

  getContactsList(){
    return this.contactsList;
  }
  updateContacts(index, contact){
    this.contactsList[index]= contact;
  }

  deleteContact(i){
    this.contactsList.splice(i,1);

  }



}

