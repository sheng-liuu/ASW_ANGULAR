import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionsNewestComponent } from './contributions-newest.component';

describe('ContributionsNewestComponent', () => {
  let component: ContributionsNewestComponent;
  let fixture: ComponentFixture<ContributionsNewestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionsNewestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionsNewestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
