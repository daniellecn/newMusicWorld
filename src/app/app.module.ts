import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';  

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { LoginComponent } from './Components/login.component';
import { ArtistComponent } from './Components/artist.component';

import { UserService } from './Services/user.service'
import { ArtistService } from './Services/artist.service'

@NgModule({
  declarations: [ 
    AppComponent, 
    LoginComponent,
    ArtistComponent,
  ],
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    CommonModule,
  ],
  providers: [
    UserService,
    ArtistService,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule{ 
}
