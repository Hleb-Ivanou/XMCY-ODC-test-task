import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.overrideComponent(HeaderComponent, {
      set: {
        imports: [RouterTestingModule],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
      },
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('link have correct RouterLinks path', () => {
    const hrefs = fixture.debugElement.queryAll(By.css('a'));

    expect(hrefs[0].nativeElement.getAttribute('href')).toEqual('/');
    expect(hrefs[1].nativeElement.getAttribute('href')).toEqual('/favorites');
  });
});
