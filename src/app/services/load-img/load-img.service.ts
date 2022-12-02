import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Image } from '../../models/image';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'any',
})
export class LoadImgService {
  private readonly thumbBaseUrl = 'https://picsum.photos/200/300?image=';
  private readonly fullBaseUrl = 'https://picsum.photos/id/';
  private readonly delay = Math.floor(Math.random() * (300 - 200 + 1)) + 200;

  constructor(private http: HttpClient) {}

  loadImages(limit: number): Observable<Image[]> {
    const arr = [];
    for (let i = 0; i < limit; i++) {
      arr.push(this.generateImage());
    }

    return of(arr).pipe(delay(this.delay * limit));
  }

  generateImage(): Image {
    const id = Math.round(Math.random() * 1000).toString();

    return { id, url: `${this.thumbBaseUrl}${id}` };
  }

  loadFullImage(id: string): Observable<Image> {
    return of({ id, url: `${this.fullBaseUrl}${id}/800/800` });
  }
}
