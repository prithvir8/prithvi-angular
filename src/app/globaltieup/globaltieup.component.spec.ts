import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobaltieupComponent } from './globaltieup.component';

describe('GlobaltieupComponent', () => {
  let component: GlobaltieupComponent;
  let fixture: ComponentFixture<GlobaltieupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobaltieupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobaltieupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
