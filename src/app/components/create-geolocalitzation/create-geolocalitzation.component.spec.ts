import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGeolocalitzationComponent } from './create-geolocalitzation.component';

describe('CreateGeolocalitzationComponent', () => {
  let component: CreateGeolocalitzationComponent;
  let fixture: ComponentFixture<CreateGeolocalitzationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGeolocalitzationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateGeolocalitzationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
