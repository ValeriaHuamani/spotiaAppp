import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


//Importar rutas
import { ROUTES } from './app.routes';
//importar para usar APIS HTTP
import { HttpClientModule } from '@angular/common/http';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
//importar services
//import { SpotifyService } from './services/spotify.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistaComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // se coloca el module para los llamar APIS htttp
    RouterModule.forRoot( ROUTES, { useHash: true }) //se-coloca-aca-para-las-rutas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
