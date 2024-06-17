import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyoutputdecoratorComponent } from './myoutputdecorator.component';

describe('MyoutputdecoratorComponent', () => {
  let component: MyoutputdecoratorComponent;
  let fixture: ComponentFixture<MyoutputdecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyoutputdecoratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyoutputdecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
