import { HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable()

export class PostService {



  url = "https://jsonplaceholder.typicode.com/posts";

  myObservable: Observable<any>;

  // performs HTTP request & HTTP Responses with external app

  public http: HttpClient;



  constructor(http: HttpClient) {

    console.log("injecting HttpClient object")

    this.http = http;

   }



   public getPosts(){

     this.myObservable = this.http.get(this.url);

     this.myObservable.subscribe((response) => {

       console.log(response);

     },

      (error) => {

        console.log(error);

      },

      () => {

        console.log("complete signal");

      })

      }

}

