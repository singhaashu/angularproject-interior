import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  filterTerm!: string;
  
detail=[{"name":"Aashish",  "surname":"Singh"   , "age":24,"city":"Ballabgarh","email":"aashish.trangile.com","salary":'20,000'},
{"name":"Vikas",   "surname":"Palwar" ,"age":22,"city":"Delhi","email":"vikas.trangile.com","salary":'25,000'},
{"name":"Saurabh",  "surname":"Sharma" , "age":26,"city":"Faridabad","email":"saurabh.trangile.com","salary":'24,000'},
{"name":"Prince",  "surname":"Garg" , "age":24,"city":"Gurugram","email":"prince.trangile.com","salary":'20,000'},
{"name":"Shivank",   "surname":"Aggarwal" , "age":24,"city":"Noida","email":"shivank.trangile.com","salary":'20,000'},
{"name":"Dheeraj",  "surname":"Singh" , "age":24,"city":"Ballabgarh","email":"dheeraj.trangile.com","salary":'24,000'},
{"name":"Rajesh",  "surname":"Gupta" , "age":24,"city":"Jaipur","email":"rajesh.trangile.com","salary":'20,000'},
{"name":"Ankur",  "surname":"Gupta" , "age":24,"city":"Jammu","email":"ankur.trangile.com","salary":'26,000'},
{"name":"Hemant",  "surname":"Sharma" , "age":24,"city":"Mumbai","email":"hemant.trangile.com","salary":'30,000'}]

data="Member's Data";

  constructor() { }

  ngOnInit(): void {
  }

}
