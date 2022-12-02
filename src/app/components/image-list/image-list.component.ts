import { Component, Input } from '@angular/core';
import { CommonModule, getLocaleCurrencySymbol } from '@angular/common';
import { Image } from '../../models/image';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-image-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent {
  @Input() images: Image[] = [];
  @Input() isAddAllow = true;
  @Input() isNavigateAllow = true;

  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  onClick(image: Image): void {
    if (this.isAddAllow) {
      this.localStorageService.saveData(image);
    }
    if (this.isNavigateAllow) {
      this.router.navigate(['/photos', image.id]);
    }
  }
}
