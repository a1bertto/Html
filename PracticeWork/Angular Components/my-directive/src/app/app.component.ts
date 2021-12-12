import { Component } from '@angular/core';
import { pathToFileURL } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-directive';
  body:String = "this is the body";
  employee:any={
    empId:100,
    empName:"albs",
    empAge:21,
    photo:"assets/images/user1"
  };

  user0:string="./assets/images/user0.png"


  public UpdatePhoto(): void {
    let imageName = this.employee.photo.split("/").pop();

    console.log(imageName);

    if(imageName === "user1.jpg")

    {

      this.employee.photo="assets/Images/user2.jpg";


    }

    else if(imageName="user2.jpg")

    {

     this.employee.photo="assets/images/user1.jpg";

  }

  }
newPost = "No Content";
enteredValue="";
  onAddPost(){
    this.newPost = this.enteredValue;

  }
}
