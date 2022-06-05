import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { OnInit, NgZone } from '@angular/core';
import {  FormBuilder, Validators } from "@angular/forms";
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Bakery';

  employeeForm:any;


  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) {
    this.mainForm();
   }

  ngOnInit(): void { }
  mainForm() {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required,Validators.pattern("^[A-Z][a-zA-Z0-9]*$")]],
      lname: ['', [Validators.required,Validators.pattern("^[A-Z][a-zA-Z0-9]*$")]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }
  
  get contactform(){
    return this.employeeForm.controls;
  }
  onSubmit() {
    
    this.apiService.createEmployee(this.employeeForm.value).subscribe(
      (res) => {
        console.log('Employee successfully created!')
      }, (error) => {
        console.log(error);
      } 
     );
     this.employeeForm.reset()
}
}