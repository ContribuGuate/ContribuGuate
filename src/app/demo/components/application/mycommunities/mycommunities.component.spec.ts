import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycommunitiesComponent } from './mycommunities.component';

describe('MycommunitiesComponent', () => {
  let component: MycommunitiesComponent;
  let fixture: ComponentFixture<MycommunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MycommunitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MycommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
