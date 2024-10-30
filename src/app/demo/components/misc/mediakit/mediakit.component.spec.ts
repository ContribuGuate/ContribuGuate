import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediakitComponent } from './mediakit.component';

describe('MediakitComponent', () => {
  let component: MediakitComponent;
  let fixture: ComponentFixture<MediakitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediakitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MediakitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
