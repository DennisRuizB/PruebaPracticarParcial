import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalitzationComponent } from './geolocalitzation.component';

describe('GeolocalitzationComponent', () => {
  let component: GeolocalitzationComponent;
  let fixture: ComponentFixture<GeolocalitzationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeolocalitzationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeolocalitzationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
