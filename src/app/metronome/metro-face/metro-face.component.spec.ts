import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetroFaceComponent } from './metro-face.component';

describe('MetroFaceComponent', () => {
  let component: MetroFaceComponent;
  let fixture: ComponentFixture<MetroFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetroFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetroFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
