import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  selectedButton:string="";
  email:string="";
  constructor() { }

  ngOnInit(): void {
  }
  public onSave($event: any):void{

    console.log('Button clicked and event object was passed to it');

    console.log($event.target.innerText);

    let str = $event.target.innerText;

     if(str === "Save"){

     this.selectedButton = str;
     }

   }

   onKeyUp($event: any){
    console.log('EVent raised on text box',$event);
        this.email= $event.target.value;

   }
   OnkeyUpWithVar(email: HTMLInputElement){
     console.log(email);
     let emailAddress =email.value;
     let emailTextSize =email.size;
     


   }

}
