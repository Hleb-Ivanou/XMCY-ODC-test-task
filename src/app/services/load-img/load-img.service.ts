import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Image } from '../../models/image';

@Injectable({
  providedIn: 'any',
})
export class LoadImgService {
  private readonly thumbBaseUrl = 'https://picsum.photos/200/300?image=';
  private readonly fullBaseUrl = 'https://picsum.photos/id/';
  private readonly delay = Math.floor(Math.random() * (300 - 200 + 1)) + 200;

  loadImages(limit: number): Observable<Image[]> {
    const arr = [];
    for (let i = 0; i < limit; i++) {
      arr.push(this.generateImage());
    }

    return of(arr).pipe(delay(this.delay * limit));
  }

  loadFullImage(id: string): Observable<Image> {
    return of({ id, url: `${this.fullBaseUrl}${id}/1000/1000` });
  }

  private generateImage(): Image {
    const id = Math.round(Math.random() * 1000).toString();

    return { id, url: `${this.thumbBaseUrl}${id}` };
  }
}
