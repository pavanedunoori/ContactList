import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddcontactComponent} from './addcontact.component';
import {inject} from "@angular/core";
import {ContactserviceService} from "../contactservice.service";
import {RouterTestingModule} from "@angular/router/testing";

describe('AddcontactComponent', () => {
  let component: AddcontactComponent;
  let fixture: ComponentFixture<AddcontactComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddcontactComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
      providers: [ContactserviceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(AddcontactComponent);
    component = fixture.componentInstance;
    component.contact = {
      firstName: 'Pavan',
      lastName: 'Somasi',
      contactNo: '812592176',
      email: '@gmail.com',
      address: 'USA'
    };
    const navigateSpy = spyOn((<any>component).router, 'navigate');
    component.onSave();
    component.isValid = true;
    expect(navigateSpy).toHaveBeenCalledWith(['']);

  });
});
