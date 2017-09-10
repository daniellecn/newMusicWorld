import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { ApolloModule } from 'apollo-angular';
import { createClient } from './apolloClient';
import { AppRoutingModule } from './app-routing.module';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { AppComponent }  from './app.component';
import { LoginComponent } from './Components/login.component';
import { LogoutComponent } from './Components/logout.component';
import { RegisterComponent } from './Components/register.component';
import { ArtistComponent } from './Components/artist.component';
import { ArtistDetailComponent } from './Components/artistDetail.component';
import { SongsComponent, SongDeleteDialogComponent } from './Components/songs.component';
import { Top10ArtistsComponent } from './Components/top10artists.component';
import { Top10SongsComponent } from './Components/top10songs.component';
import { SongDialogComponent } from './Components/songDialog.component';

import { UserService } from './Services/user.service'
import { SongService } from './Services/song.service'
import { ArtistService } from './Services/artist.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ArtistComponent,
    ArtistDetailComponent,
    SongsComponent,
    Top10ArtistsComponent,
    Top10SongsComponent,
    SongDialogComponent,
    SongDeleteDialogComponent
  ],
  imports:      [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialModule,
    ApolloModule.forRoot(createClient)
  ],
  providers: [
    UserService,
    ArtistService,
    SongService,
    {provide: MD_DIALOG_DATA, useValue: {} },
    {provide: MdDialogRef, useValue: {} },
  ],
  bootstrap:    [ AppComponent ],
  entryComponents:[
    SongDialogComponent,
    SongDeleteDialogComponent
  ]
})
export class AppModule{ 
}
