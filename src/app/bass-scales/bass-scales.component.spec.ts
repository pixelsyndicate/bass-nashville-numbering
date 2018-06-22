import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BassScalesComponent } from './bass-scales.component';

describe('BassScalesComponent', () => {
  let component: BassScalesComponent;
  let fixture: ComponentFixture<BassScalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BassScalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BassScalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
