import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OctivesComponent } from './octives.component';

describe('OctivesComponent', () => {
  let component: OctivesComponent;
  let fixture: ComponentFixture<OctivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OctivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OctivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
