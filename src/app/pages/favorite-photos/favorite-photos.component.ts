import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ImageListComponent } from 'src/app/components/image-list/image-list.component';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Image } from '../../models/image';

@Component({
  standalone: true,
  selector: 'app-favorite-photos',
  imports: [CommonModule, ImageListComponent],
  templateUrl: './favorite-photos.component.html',
  styleUrls: ['./favorite-photos.component.scss'],
})
export class FavoritePhotosComponent implements OnInit {
  images: Image[] = [];

  constructor(private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.images = this.localStorageService
      .getData()
      .map((img) => ({ ...img, url: `https://picsum.photos/id/${img.id}/200/300` }));
  }
}
