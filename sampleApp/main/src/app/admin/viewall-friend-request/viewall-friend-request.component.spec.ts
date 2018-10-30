import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallFriendRequestComponent } from './viewall-friend-request.component';

describe('ViewallFriendRequestComponent', () => {
  let component: ViewallFriendRequestComponent;
  let fixture: ComponentFixture<ViewallFriendRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallFriendRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallFriendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
