import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Image } from '../../models/image';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any'
})
export class LoadImgService {
  private readonly thumbBaseUrl = 'https://picsum.photos/200/300?image=';
  private readonly fullBaseUrl = 'https://picsum.photos/id/';

  constructor(private http: HttpClient) {

  }

  loadImages(limit: number): Observable<Image[]> {
    const arr = [];
    for (let i = 0; i < limit; i++) {
      arr.push(this.generateImage());
    }
 
    return of(arr);
  }

  generateImage(): Image {
    const id = Math.round(Math.random() * 1000).toString();

    return {id, url: `${this.thumbBaseUrl}${id}`};
  }

  loadFullImage(id: string): Observable<Image> {
    return of({id, url: `${this.fullBaseUrl}${id}/800/800`});
  }

}
