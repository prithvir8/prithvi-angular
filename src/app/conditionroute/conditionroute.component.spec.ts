import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionrouteComponent } from './conditionroute.component';

describe('ConditionrouteComponent', () => {
  let component: ConditionrouteComponent;
  let fixture: ComponentFixture<ConditionrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConditionrouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
