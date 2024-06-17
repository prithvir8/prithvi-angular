import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfdirectiveComponent } from './ng-ifdirective.component';

describe('NgIfdirectiveComponent', () => {
  let component: NgIfdirectiveComponent;
  let fixture: ComponentFixture<NgIfdirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgIfdirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
