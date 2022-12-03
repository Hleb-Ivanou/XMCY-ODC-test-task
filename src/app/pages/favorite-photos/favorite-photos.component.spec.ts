import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePhotosComponent } from './favorite-photos.component';

describe('FavoritePhotosComponent', () => {
  let component: FavoritePhotosComponent;
  let fixture: ComponentFixture<FavoritePhotosComponent>;

  beforeEach(async () => {
    await TestBed.overrideComponent(FavoritePhotosComponent, {});

    fixture = TestBed.createComponent(FavoritePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
