import { NgModule, OnInit }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login.component';
import { ArtistComponent } from './Components/artist.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'artist', component: ArtistComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{
}