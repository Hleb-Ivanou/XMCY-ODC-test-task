import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BehaviorSubject, debounceTime, Observable, scan, switchMap, tap } from 'rxjs';
import { ImageListComponent } from 'src/app/components/image-list/image-list.component';
import { LoadImgService } from 'src/app/services/load-img/load-img.service';
import { Image } from '../../models/image';

@Component({
  standalone: true,
  selector: 'app-all-photos',
  imports: [CommonModule, MatProgressSpinnerModule, ImageListComponent],
  providers: [LoadImgService],
  templateUrl: './all-photos.component.html',
  styleUrls: ['./all-photos.component.scss'],
})
export class AllPhotosComponent implements OnInit {
  readonly limitImgs = 6;

  images$?: Observable<Image[]>;
  isLoader$ = new BehaviorSubject<boolean>(true);
  scrollBottom$ = new BehaviorSubject<boolean>(true);

  @HostListener('document:scroll')
  onScroll(): void {
    const el = document.scrollingElement || document.documentElement;

    if (el.scrollTop + el.clientHeight > el.scrollHeight) {
      this.scrollBottom$.next(true);
    }
  }

  constructor(private loadImgService: LoadImgService) {}

  ngOnInit(): void {
    this.images$ = this.scrollBottom$.pipe(
      tap(() => this.isLoader$.next(true)),
      debounceTime(500),
      switchMap(() => this.loadImgService.loadImages(this.limitImgs)),
      scan((acc, val) => (acc = acc.concat(val))),
      tap(() => this.isLoader$.next(false)),
    );
  }
}
