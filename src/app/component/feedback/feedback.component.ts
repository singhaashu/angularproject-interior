import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
title = 'angform';
onSubmit:any;
weekday=["Sunday","Monday","Tuesday","Wednesday",'Thursday','Friday','saturday']
  constructor() { }

  ngOnInit(): void {
  }

}
