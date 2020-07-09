import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBC4f4AmjybAHXHXZy0ouT2WD76GU2jURscvy3qSx0kU7jeglyZIy0s-2pFLJcOFSNHITAUixmvEJi0QMw'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    // const headers = new HttpHeaders({
    //   'Authorization' : 'Bearer BQC9hqFQUZ6DxNLXvCnLQovpQGP6-JNQ2udQSKyI1mNpvBNXcWqq95tQYKR05Bxij3ExMFz1mRQZn24xiYY'
    // });
    return this.getQuery('browse/new-releases?limit=20')
               .pipe( map(data => {
                 return data['albums'].items;
               }));
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=track%2Cartist&limit=15`)
               .pipe( map(data => data['artists'].items));
  }

  getCancion(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=track%2Cartist&limit=15`)
               .pipe( map(data => data['tracks'].items));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`);
               //.pipe( map(data => data['artists'].items));
  }

  getTopTrack(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe( map(data => data['tracks']));
  }

}
