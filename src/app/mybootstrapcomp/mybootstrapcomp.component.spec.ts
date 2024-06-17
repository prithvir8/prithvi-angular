import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybootstrapcompComponent } from './mybootstrapcomp.component';

describe('MybootstrapcompComponent', () => {
  let component: MybootstrapcompComponent;
  let fixture: ComponentFixture<MybootstrapcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybootstrapcompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MybootstrapcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
