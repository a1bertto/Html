import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


const routes:Routes =[
{path:'',component:HomeComponent},
{path:'/home',component:HomeComponent},
{path: '/users', component: UsersComponent },
{path: '**',component:Error}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent, UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
