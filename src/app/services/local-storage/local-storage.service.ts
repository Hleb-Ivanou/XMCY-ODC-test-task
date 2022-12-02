import { Injectable } from '@angular/core';
import { Image } from '../../models/image';

@Injectable({
  providedIn: 'any',
})
export class LocalStorageService {
  readonly collectionName = 'favorites';

  public saveData(image: Image) {
    const images = this.getData();

    if (images.findIndex((el) => el.id === image.id) !== -1) {
      return;
    }

    images.push(image);
    localStorage.setItem(this.collectionName, JSON.stringify(images));
  }

  public getData(): Image[] {
    const images = localStorage.getItem(this.collectionName);

    return images ? JSON.parse(images) : [];
  }

  public removeData(id: string) {
    const images = this.getData();

    localStorage.setItem(this.collectionName, JSON.stringify([...images].filter((el) => el.id !== id)));
  }
}
