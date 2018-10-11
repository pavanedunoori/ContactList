import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Contactdetails} from '../contactdetails';
import {ContactserviceService} from '../contactservice.service';
import { empty } from 'rxjs/internal/observable/empty';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {

  buttonValue = 'Save';
  title = 'New Contact';
  index: number;
  isValid: boolean;
  phone_errormessage: string;
  email_errormessage: string;
  contact: Contactdetails = {
    firstName: '',
    lastName: '',
    contactNo: '',
    email: '',
    address: ''
  }

  constructor(private route: Router, private contactService: ContactserviceService, private activatedRoute: ActivatedRoute) {
  }
 
  //Method to add/update Contact

  onSave() {
    let isMailValid = false;
    let isphValid = false;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.contact.email)) {
      isMailValid = true;
    } else {
      this.email_errormessage = 'Enter Valid email address';
    }
    const error = '';
    const stripped = this.contact.contactNo.replace(/[\(\)\.\-\ ]/g, '');
  
    if (stripped === '' || isNaN(parseInt(stripped)) || (stripped.length !== 10)) {
      this.phone_errormessage = 'Enter Valid phone number';
    } else {
      isphValid = true;
    }
    if (isphValid && isMailValid) {
      if (this.buttonValue === 'Save')
        this.contactService.saveContacts(this.contact);
      else
        this.contactService.updateContacts(this.index, this.contact);
      this.route.navigateByUrl('');
    } else {
  
    }
  }
  resetPhoneError(){
    this.phone_errormessage = "";
  }

  resetEmailError(){
     this.email_errormessage = "";
  }

  onCancel() {
    this.route.navigateByUrl("");
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.index = params['index'];
      if (this.index) {
        this.contact = this.contactService.contactsList[this.index];
        this.buttonValue = "Update";
        this.title = "Update a contact";
      }
    })
  }

}
