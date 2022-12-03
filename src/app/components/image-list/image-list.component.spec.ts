import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ImageListComponent } from './image-list.component';

describe('ImageListComponent', () => {
  let component: ImageListComponent;
  let fixture: ComponentFixture<ImageListComponent>;

  beforeEach(async () => {
    await TestBed.overrideComponent(ImageListComponent, {
      set: {
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      },
    });

    fixture = TestBed.createComponent(ImageListComponent);
    component = fixture.componentInstance;

    component.images = [
      {
        id: '288',
        url: 'https://picsum.photos/200/300?image=288',
      },
      {
        id: '143',
        url: 'https://picsum.photos/200/300?image=143',
      },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create list of 2 images', () => {
    const imgs = fixture.debugElement.queryAll(By.css('.image'));

    expect(imgs.length).toEqual(2);
  });

  it('should contain 2 images with expected src attribute', () => {
    const imgs = fixture.debugElement.queryAll(By.css('.image'));
    const expectUrl1 = (imgs[0].nativeElement as HTMLImageElement).src;
    const expectUrl2 = (imgs[1].nativeElement as HTMLImageElement).src;

    expect(expectUrl1).toEqual(component.images[0].url);
    expect(expectUrl2).toEqual(component.images[1].url);
  });

  it('should allow add img to favorites', fakeAsync(() => {
    const imgClickEvent = spyOn(component, 'onClick');
    const img = fixture.debugElement.query(By.css('.image')).nativeElement;
    img.click();
    tick();

    expect(imgClickEvent).toHaveBeenCalled();
  }));
});
