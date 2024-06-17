import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapbannerComponent } from './boostrapbanner.component';

describe('BoostrapbannerComponent', () => {
  let component: BoostrapbannerComponent;
  let fixture: ComponentFixture<BoostrapbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostrapbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoostrapbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
