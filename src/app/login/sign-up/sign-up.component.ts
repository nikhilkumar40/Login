import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signUpPage= new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    role: new FormControl(''),
    password: new FormControl(''),
    phone: new FormControl(''),
    company: new FormControl('')
  })

  submit(){
    console.warn(this.signUpPage.value)
  }
}
