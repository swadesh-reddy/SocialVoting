import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMyFriendsComponent } from './view-all-my-friends.component';

describe('ViewAllMyFriendsComponent', () => {
  let component: ViewAllMyFriendsComponent;
  let fixture: ComponentFixture<ViewAllMyFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllMyFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllMyFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
