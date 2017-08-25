import { NgModule, OnInit }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
 
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { LoginComponent } from './Components/login.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [ 
    AppComponent, 
    LoginComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule implements OnInit{ 
  ngOnInit(): void{
    alert('Danielle');
  }
}
