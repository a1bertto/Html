import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { observable, Observable, Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-customobservable',
  templateUrl: './customobservable.component.html',
  styleUrls: ['./customobservable.component.css']
})
export class CustomobservableComponent implements OnInit {
public myObservable: Observable<string>;
public Unsubscribe:Unsubscribable;
  constructor() {
    this.myObservable = new Observable((observer)=>{
      setTimeout(()=>{
        observer.next("string 1");

      },3000);

      setTimeout(()=>{
        observer.next("string 2");

      },4000);
      setTimeout(()=>{
        observer.error(`error -${error}`);

      },6000);

      observer.complete();
    });
  }
  SubscribeObservable(){
    this.unsubscribeObservable =
      this.myObservable.subscribe((data:string)=>{console.log(data);},
      (error:string)=>{
        console.log(error);
      },
      ()=>{
        console.log("complete sigmal from observavle");
      })
  }

  unsubscribeObservable(){

    this.subscribe.unsubscribe();

  }
  ngOnInit(): void {
  }

}
