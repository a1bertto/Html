import { Component, OnInit } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})


export class FooterComponent implements OnInit {
  title:String="Anything"



  constructor() {

   function changeTitle(){
      title = "newtitle"
    }
  }

  ngOnInit(): void {
  }

}
