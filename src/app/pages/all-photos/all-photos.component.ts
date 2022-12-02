import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { concat, delay, from, fromEvent, interval, Observable, of, reduce, repeat, shareReplay, Subscription, take, takeUntil, tap } from 'rxjs';
import { ImageListComponent } from 'src/app/components/image-list/image-list.component';
import { LoadImgService } from 'src/app/services/load-img/load-img.service';
import { Image } from '../../models/image';

@Component({
  standalone: true,
  selector: 'app-all-photos',
  imports: [CommonModule, MatProgressSpinnerModule, ImageListComponent],
  providers: [LoadImgService],
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.scss']
})
export class AllPhotosComponent implements OnInit {
  images$?: Observable<Image[]>;

  constructor(private loadImgService: LoadImgService) {
  }

  ngOnInit(): void {
    this.images$ = this.loadImgService.loadImages(10);
  }

}
