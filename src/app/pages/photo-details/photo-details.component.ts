import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, switchMap } from 'rxjs';
import { Image } from 'src/app/models/image';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { LoadImgService } from 'src/app/services/load-img/load-img.service';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-photo-details',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './photo-details.component.html',
  styleUrls: ['./photo-details.component.scss']
})
export class PhotoDetailsComponent implements OnInit {
  photo$?: Observable<Image>;
  id?: string | null;

  constructor(
    private route: ActivatedRoute,
    private loadImgService: LoadImgService,
    private localStorageService: LocalStorageService,
  ) {}

  ngOnInit() {
    this.photo$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id') as string;
        return this.loadImgService.loadFullImage(id);
      })
    );
  }

  onClick(id: string) {
    this.localStorageService.removeData(id);
  }

}
