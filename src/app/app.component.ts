import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Template driven forms';

  @ViewChild('contactForm')
  contactForm!: NgForm;

  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'England'),
  ];

  contact: contact = new contact();

  ngOnInit() {
    this.contact = {
      firstname: 'Elon',
      lastname: 'Musk',
      email: 'emusk@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '2',
      address: {
        city: 'Austin',
        street: 'Perry Cross Rd',
        pincode: '10001',
      },
    };

    setTimeout(() => {
      this.contactForm.setValue(this.contact);
    });
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

  setDefaults() {
    this.contactForm.setValue(this.contact);
  }

  changeCountry() {
    this.contactForm.controls['country'].setValue('1');
  }

  patchValue() {
    let obj = {
      firstname: 'Praveen',
      lastname: 'Aggarwal',
      email: 'pagg@gmail.com',
    };

    this.contactForm.control.patchValue(obj);
  }

  changeAddress() {
    let obj = {
      city: 'San Jose',
      street: 'Brigade Road',
      pincode: '10002',
    };
    let address = this.contactForm.controls['address'] as FormGroup;
    address.patchValue(obj);
  }

  reset() {
    this.contactForm.reset();
  }

  resetForm() {
    this.contactForm.resetForm();
  }
}

export class contact {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  gender: string = '';
  isMarried: boolean = false;
  country: string = '';
  address!: {
    city: string;
    street: string;
    pincode: string;
  };
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
