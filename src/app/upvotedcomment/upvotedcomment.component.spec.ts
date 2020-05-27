import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvotedcommentComponent } from './upvotedcomment.component';

describe('UpvotedcommentComponent', () => {
  let component: UpvotedcommentComponent;
  let fixture: ComponentFixture<UpvotedcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpvotedcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvotedcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
