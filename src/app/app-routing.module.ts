import { NgModule, OnInit }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SongsComponent } from './Components/songs.component';
import { LoginComponent } from './Components/login.component';
import { VideoComponent } from './Components/video.component';
import { RegisterComponent } from './Components/register.component';
import { LogoutComponent } from './Components/logout.component';


import { ArtistComponent } from './Components/artist.component';
import { ArtistDetailComponent } from './Components/artistDetail.component';
import { Top10ArtistsComponent } from './Components/top10artists.component';
import { Top10SongsComponent } from './Components/top10songs.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'allSongs', component: SongsComponent},
=======
  { path: '', redirectTo: '', pathMatch: 'full', component: VideoComponent },
  { path: 'allSongs/:action', component: SongsComponent},
>>>>>>> 8bde88fc4fba42ed37b23cee099dcd7e88c84dce
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'artist', component: ArtistComponent},
  { path: 'artistDetail', component: ArtistDetailComponent},
  { path: 'top10artists', component: Top10ArtistsComponent},
<<<<<<< HEAD
  { path: 'top10songs', component: SongsComponent}
=======
  { path: 'top10songs', component: Top10SongsComponent}
>>>>>>> 8bde88fc4fba42ed37b23cee099dcd7e88c84dce
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{
}
