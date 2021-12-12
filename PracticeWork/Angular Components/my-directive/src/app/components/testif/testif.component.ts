import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testif',
  templateUrl: './testif.component.html',
  styleUrls: ['./testif.component.css']
})
export class TestifComponent implements OnInit {
//variables

isLogged=true;
//Functions
person =[{
  name: "Albert",
  Age: 21,
  Country:"UK"

},
{
  name: "Angel",
  Age: 21,
  Country:"USA"

}]
  constructor() {

   }

  ngOnInit(): void {
  }

OnLogged(){
  this.isLogged = !this.isLogged;
}
}
