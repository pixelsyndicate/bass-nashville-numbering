import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TapClickComponent } from './tap-click.component';

describe('TapClickComponent', () => {
  let component: TapClickComponent;
  let fixture: ComponentFixture<TapClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
