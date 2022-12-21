import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { NfComponent } from './nf/nf.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { RegisterComponent } from './register/register.component';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'about', canActivate: [AuthGuard], component: AboutComponent },
  { path: 'movies', canActivate: [AuthGuard], component: MoviesComponent },
  { path: 'tv', canActivate: [AuthGuard], component: TvComponent },
  { path: 'gallery', canActivate: [AuthGuard], component: GalleryComponent },
  { path: 'contacts', canActivate: [AuthGuard], component: ContactsComponent },
  { path: 'movedetails/:id', canActivate: [AuthGuard], component: MoviedetailsComponent },
  { path: 'tvDetails/:id', canActivate: [AuthGuard], component: TvDetailsComponent },
  { path: 'person_detail/:id', canActivate: [AuthGuard], component: PersonDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
