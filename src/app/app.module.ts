import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NfComponent } from './nf/nf.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TvComponent } from './tv/tv.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import {HttpClientModule}from '@angular/common/http';
import { TvDetailsComponent } from './tv-details/tv-details.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    NfComponent,
    FooterComponent,
    MoviesComponent,
    RegisterComponent,
    LoginComponent,
    MoviedetailsComponent,
    TvComponent,
    ContactsComponent,
    GalleryComponent,
    TvDetailsComponent,
    PersonDetailComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
