import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRecommendedPostComponent } from './view-all-recommended-post.component';

describe('ViewAllRecommendedPostComponent', () => {
  let component: ViewAllRecommendedPostComponent;
  let fixture: ComponentFixture<ViewAllRecommendedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllRecommendedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllRecommendedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
