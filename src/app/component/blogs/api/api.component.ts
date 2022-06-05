import { Component, OnInit } from '@angular/core';
import{HttpClient}from '@angular/common/http';
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  title = 'angpracapi';
  resData:any;
 newsData:any;
  constructor(public http:HttpClient) { }

  ngOnInit(){
    const url = 'https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=9dd2b3a610244b42a4eb73deac509a2d';
    this.http.get(url)
    .subscribe(res=>{
      this.resData=res;
      if(this.resData.status== "ok"){
        this.newsData=this.resData.articles;
        console.log(this.newsData);
      }
    })}
}
