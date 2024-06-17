import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItproskillsetComponent } from './itproskillset.component';

describe('ItproskillsetComponent', () => {
  let component: ItproskillsetComponent;
  let fixture: ComponentFixture<ItproskillsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItproskillsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItproskillsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
