import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncrementService {


  constructor(service:IncrementService){

    console.log("AppComponent Loaded..");

   // this.myservice = service;

    }



  callIncrement(){

    //let val = this.myservice.incrementValue(2);

    //console.log(val);

  }


}
