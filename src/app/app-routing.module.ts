import { NgModule, OnInit }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SongsComponent } from './Components/songs.component';
import { LoginComponent } from './Components/login.component';
import { VideoComponent } from './Components/video.component';
import { RegisterComponent } from './Components/register.component';
import { LogoutComponent } from './Components/logout.component';


import { ArtistComponent } from './Components/artist.component';
// import { ArtistDetailDialogComponent } from './Components/artistDetailDialog.component';
import { Top10ArtistsComponent } from './Components/top10artists.component';
import { Top10SongsComponent } from './Components/top10songs.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', component: VideoComponent },
  { path: 'allSongs', component: SongsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'artist', component: ArtistComponent},
  // { path: 'artistDetail', component: ArtistDetailComponent},
  { path: 'top10artists', component: Top10ArtistsComponent},
  { path: 'top10songs', component: Top10SongsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{
}
