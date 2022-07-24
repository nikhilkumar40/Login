import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgControlStatusGroup } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginPage= new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })
  submit(){
    console.warn(this.loginPage.value);
  }

}
