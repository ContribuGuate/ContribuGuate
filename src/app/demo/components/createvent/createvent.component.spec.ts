import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateventComponent } from './createvent.component';

describe('CreateventComponent', () => {
  let component: CreateventComponent;
  let fixture: ComponentFixture<CreateventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
