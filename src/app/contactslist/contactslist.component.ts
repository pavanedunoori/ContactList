import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router'
import {Contactdetails} from '../contactdetails';
import {ContactserviceService} from '../contactservice.service';

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.css']
})
export class ContactslistComponent implements OnInit {
  contactList: Contactdetails[] = [];

  constructor(private route: Router, private contactService: ContactserviceService) {
  }

  addContact() {
    this.route.navigateByUrl('save', {skipLocationChange: true});
  }

  onEdit(index) {
    this.route.navigate(['update', index], {skipLocationChange: true});

  }

  onDelete(i) {
    this.contactService.deleteContact(i);
  }

  ngOnInit() {
    this.contactList = this.contactService.getContactsList();
  }
}
