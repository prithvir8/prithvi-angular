import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetapidataComponent } from './getapidata.component';

describe('GetapidataComponent', () => {
  let component: GetapidataComponent;
  let fixture: ComponentFixture<GetapidataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetapidataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetapidataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
