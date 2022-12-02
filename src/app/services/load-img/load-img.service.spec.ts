import { TestBed } from '@angular/core/testing';

import { LoadImgService } from './load-img.service';

describe('LoadImgService', () => {
  let service: LoadImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
