import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffWorkLogComponent } from './staff-work-log.component';

describe('StaffWorkLogComponent', () => {
  let component: StaffWorkLogComponent;
  let fixture: ComponentFixture<StaffWorkLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffWorkLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffWorkLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
