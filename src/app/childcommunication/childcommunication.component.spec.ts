import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcommunicationComponent } from './childcommunication.component';

describe('ChildcommunicationComponent', () => {
  let component: ChildcommunicationComponent;
  let fixture: ComponentFixture<ChildcommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildcommunicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildcommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
