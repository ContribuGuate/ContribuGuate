import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackorganizationComponent } from './trackorganization.component';

describe('TrackorganizationComponent', () => {
  let component: TrackorganizationComponent;
  let fixture: ComponentFixture<TrackorganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackorganizationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackorganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
