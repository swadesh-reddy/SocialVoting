import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchforfriendComponent } from './searchforfriend.component';

describe('SearchforfriendComponent', () => {
  let component: SearchforfriendComponent;
  let fixture: ComponentFixture<SearchforfriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchforfriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchforfriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
