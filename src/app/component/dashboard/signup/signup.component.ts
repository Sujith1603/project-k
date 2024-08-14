import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  formData = {
    username: '',
    email: '',
    password: ''
  };
username: any;
email: any;
password: any;

  submitForm() {
    console.log('Form submitted:', this.formData);
  }
}
