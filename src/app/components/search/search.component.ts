import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artistas: any[] = [];
  tracks: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {    }


  //buscar
  buscar(termino: string) {
    console.log(termino);

    //loading
    this.loading = true;

    //busca artista
    this.spotify.getArtistas( termino )
        .subscribe((data: any) => {
          console.log(data);
          this.artistas = data;
          this.loading = false;
        });

    //busca cancion
    this.spotify.getCancion( termino )
        .subscribe((data: any) => {
          console.log(data);
          this.tracks = data;
          this.loading = false;
        });
  }

}
