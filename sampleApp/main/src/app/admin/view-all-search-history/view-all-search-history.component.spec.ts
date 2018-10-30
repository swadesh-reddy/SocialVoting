import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSearchHistoryComponent } from './view-all-search-history.component';

describe('ViewAllSearchHistoryComponent', () => {
  let component: ViewAllSearchHistoryComponent;
  let fixture: ComponentFixture<ViewAllSearchHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllSearchHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllSearchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
