import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorydComponent } from './historyd.component';

describe('HistorydComponent', () => {
  let component: HistorydComponent;
  let fixture: ComponentFixture<HistorydComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorydComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistorydComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
