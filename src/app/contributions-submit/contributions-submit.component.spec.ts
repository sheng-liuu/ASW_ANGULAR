import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionsSubmitComponent } from './contributions-submit.component';

describe('ContributionsSubmitComponent', () => {
  let component: ContributionsSubmitComponent;
  let fixture: ComponentFixture<ContributionsSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionsSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionsSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
