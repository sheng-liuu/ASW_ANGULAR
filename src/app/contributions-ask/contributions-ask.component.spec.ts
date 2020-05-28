import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionsAskComponent } from './contributions-ask.component';

describe('ContributionsAskComponent', () => {
  let component: ContributionsAskComponent;
  let fixture: ComponentFixture<ContributionsAskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionsAskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionsAskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
