import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectindexComponent } from './projectindex.component';

describe('ProjectindexComponent', () => {
  let component: ProjectindexComponent;
  let fixture: ComponentFixture<ProjectindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectindexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
