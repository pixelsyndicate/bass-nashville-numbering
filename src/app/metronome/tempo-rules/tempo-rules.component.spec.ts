import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempoRulesComponent } from './tempo-rules.component';

describe('TempoRulesComponent', () => {
  let component: TempoRulesComponent;
  let fixture: ComponentFixture<TempoRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempoRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempoRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
